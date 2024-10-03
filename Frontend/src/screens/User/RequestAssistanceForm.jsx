import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

function RequestAssistanceForm() {
  const [description, setDescription] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { counselorId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { specializations } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      console.log(counselorId);
      console.log(userId);
      console.log(description);
      console.log(serviceType);
      const response = await axios.post(
        `http://localhost:8081/api/assistance-requests/create?userId=${userId}&supportCounselorId=${counselorId}`,
        {
          description,
          serviceType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error submitting request: ", error);
      setError("Error submitting request. Please try again.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Request Assistance
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Description
          </label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Service Type
          </label>
          <select
            required
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a service type</option>
            {specializations.map((specialization, index) => (
              <option key={index} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full py-2">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestAssistanceForm;
