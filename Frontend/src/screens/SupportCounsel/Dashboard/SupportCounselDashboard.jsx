import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../authentication/AuthProvider";

function SupportCounselorDashboard() {
  const { token } = useContext(AuthContext);
  const [assistanceRequests, setAssistanceRequests] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    const fetchAssistanceRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/assistance-requests/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAssistanceRequests(response.data);
      } catch (error) {
        setError("Error fetching assistance requests.");
      }
    };

    fetchAssistanceRequests();
  }, [token]);

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/api/assistance-requests/update/${id}`,
        {
          status: "Accepted",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAssistanceRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? { ...request, status: "Accepted" } : request
        )
      );
    } catch (error) {
      setError("Error accepting the request.");
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/api/assistance-requests/update/${id}`,
        {
          status: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAssistanceRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? { ...request, status: "Rejected" } : request
        )
      );
    } catch (error) {
      setError("Error rejecting the request.");
    }
  };
  const filteredRequests = assistanceRequests.filter((request) => {
    if (filter === "All") return true;
    return request.status === filter;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Assistance Requests
      </h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4 flex space-x-4">
        <button
          className={`btn ${filter === "All" ? "btn-primary" : ""}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`btn ${filter === "Pending" ? "btn-primary" : ""}`}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
        <button
          className={`btn ${filter === "Accepted" ? "btn-primary" : ""}`}
          onClick={() => setFilter("Accepted")}
        >
          Accepted
        </button>
        <button
          className={`btn ${filter === "Rejected" ? "btn-primary" : ""}`}
          onClick={() => setFilter("Rejected")}
        >
          Rejected
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-left bg-base-200 dark:bg-gray-700">
              <th className="p-2">ID</th>
              <th className="p-2">Service Type</th>
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Description</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id} className="hover:bg-base-100">
                <td className="p-2">{request.id}</td>
                <td className="p-2">{request.serviceType}</td>
                <td className="p-2">{request.user.firstName}</td>
                <td className="p-2">{request.user.lastName}</td>
                <td className="p-2">{request.user.email}</td>
                <td className="p-2">{request.description}</td>
                <td className="p-2">
                  <span className="badge badge-info">{request.status}</span>
                </td>
                <td className="p-2 space-x-2">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleAccept(request.id)}
                    disabled={request.status !== "Pending"}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleReject(request.id)}
                    disabled={request.status !== "Pending"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupportCounselorDashboard;
