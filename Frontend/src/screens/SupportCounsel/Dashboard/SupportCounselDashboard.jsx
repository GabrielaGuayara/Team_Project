import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../authentication/AuthProvider";

function SupportCounselorDashboard() {
  const { token } = useContext(AuthContext);
  const [assistanceRequests, setAssistanceRequests] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssistanceRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/counselor/assistance-requests",
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Assistance Requests
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left bg-gray-200 dark:bg-gray-700">
              <th className="p-2">Request ID</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {assistanceRequests.map((request) => (
              <tr key={request.id} className="bg-white dark:bg-gray-800">
                <td className="p-2">{request.id}</td>
                <td className="p-2">{request.userName}</td>
                <td className="p-2">{request.description}</td>
                <td className="p-2">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupportCounselorDashboard;
