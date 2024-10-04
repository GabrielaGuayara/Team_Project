import React, { useEffect, useState } from "react";
import axios from "axios";

function UserRequestsPage() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/assistance-requests/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data[0].supportCounselor.email);
        setRequests(response.data);
        console.log(requests);
        setLoading(false);
      } catch (err) {
        setError("Failed to load requests");
        setLoading(false);
      }
    };

    fetchRequests();
  }, [userId]);

  if (loading) {
    return <p>Loading requests...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Your Assistance Requests
      </h1>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-left bg-base-200 dark:bg-gray-700">
                <th className="p-2">Request ID</th>
                <th className="p-2">Support Counselor Email</th>
                <th className="p-2">Description</th>
                <th className="p-2">Service Type</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-base-100">
                  {console.log(request.supportCounselor.email)}
                  <td className="p-2">{request.id}</td>
                  <td className="p-2">{request.supportCounselor.email}</td>
                  <td className="p-2">{request.description}</td>
                  <td className="p-2">{request.serviceType}</td>
                  <td className="p-2">
                    <span
                      className={`badge ${
                        request.status === "Pending"
                          ? "badge-warning"
                          : request.status === "Accepted"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserRequestsPage;
