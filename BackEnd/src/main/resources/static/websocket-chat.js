let stompClient = null;
let userId = null;
let subscribedChannels = {};
let userDetails = {};

function connect() {
  userId = document.getElementById("userId").value.trim();

  if (userId) {
    const socket = new SockJS("/chatroom");
    stompClient = Stomp.over(socket);

    stompClient.connect(
      {},
      function (frame) {
        console.log(frame);

        document.getElementById("chat-window").style.display = "block";

        stompClient.send(
          "/app/register",
          {},
          JSON.stringify({ sender: userId })
        );

        fetchUserDetails(userId);

        if (!subscribedChannels["/user/messages"]) {
          stompClient.subscribe("/user/messages", function (message) {
            const parsedMessage = JSON.parse(message.body);
            fetchUserDetails(parsedMessage.sender);
            showMessage(parsedMessage);
          });
          subscribedChannels["/user/messages"] = true;
        }

        const recipientId = document.getElementById("recipientId").value.trim();
        if (recipientId) {
          fetchUserDetails(recipientId);
          loadAndDisplayConversationHistory(userId, recipientId);
        }
      },
      function (error) {
        console.log("stomp error ", error);
      }
    );
  }
}

function fetchUserDetails(userId) {
  if (!userDetails[userId]) {
    return fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          userDetails[userId] = `${user.firstName} ${user.lastName}`;
          console.log(`GOT ${userId}: ${userDetails[userId]}`);
        } else {
          console.log(`No user found for ID ${userId}`);
          userDetails[userId] = "Unknown User";
        }
      })
      .catch((error) => {
        console.log("error with fetching user", error);
        userDetails[userId] = "Unknown User";
      });
  } else {
    return Promise.resolve();
  }
}

function generateConversationId(userId1, userId2) {
  return [userId1, userId2].sort().join("-");
}

function subscribeToChannel(conversationId) {
  if (!subscribedChannels[conversationId]) {
    stompClient.subscribe(
      "/topic/conversation/" + conversationId,
      function (message) {
        const parsedMessage = JSON.parse(message.body);
        fetchUserDetails(parsedMessage.sender);
        showMessage(parsedMessage);
      }
    );
    subscribedChannels[conversationId] = true;
  }
}

function showMessage(message) {
  const chat = document.getElementById("chat");
  const messageElement = document.createElement("div");
  const senderName = userDetails[message.sender];
  messageElement.textContent = `${senderName}: ${message.message}`;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}

document
  .getElementById("message-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    sendMessage();
  });

function sendMessage() {
  const recipientId = document.getElementById("recipientId").value.trim();
  const messageContent = document.getElementById("message").value.trim();

  if (messageContent && recipientId && stompClient) {
    const conversationId = generateConversationId(userId, recipientId);

    subscribeToChannel(conversationId);

    const chatMessage = {
      sender: userId,
      recipient: recipientId,
      message: messageContent,
    };

    stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
    document.getElementById("message").value = "";
  }
}

function loadAndDisplayConversationHistory(senderId, recipientId) {
  if (senderId && recipientId) {
    fetch(`/api/messages/history?sender=${senderId}&recipient=${recipientId}`)
      .then((response) => response.json())
      .then((messages) => {
        console.log(messages);
        if (Array.isArray(messages)) {
          const userPromises = messages.map((message) =>
            fetchUserDetails(message.sender)
          );

          Promise.all(userPromises).then(() => {
            messages.forEach((message) => {
              showMessage(message);
            });
          });
        } else {
          console.log("got this instead", messages);
        }
      })
      .catch((error) => {
        console.log("error with conversation history", error);
      });
  }
}
document.getElementById("recipientId").addEventListener("change", function () {
  const recipientId = this.value.trim();
  if (recipientId) {
    fetchUserDetails(recipientId);
    loadAndDisplayConversationHistory(userId, recipientId);
  }
});
