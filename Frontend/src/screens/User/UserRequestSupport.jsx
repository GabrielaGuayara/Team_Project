import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRequestSupport() {
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/counselor");
        setCounselors(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching counselors.");
        setLoading(false);
      }
    };

    fetchCounselors();
  }, []);

  const getCounselorsBySpecialization = () => {
    const groupedCounselors = {};
    counselors.forEach((counselor) => {
      counselor.specializations.forEach((specialization) => {
        if (!groupedCounselors[specialization]) {
          groupedCounselors[specialization] = [];
        }
        groupedCounselors[specialization].push(counselor);
      });
    });
    return groupedCounselors;
  };

  const groupedCounselors = getCounselorsBySpecialization();

  const handleRequestAssistance = (counselorId, specializations) => {
    navigate(`/request-assistance/${counselorId}`, {
      state: { specializations },
    });
  };

  if (loading) {
    return <div>Loading counselors...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Request Support From One Of Our Support Counselors!
      </h1>

      {Object.keys(groupedCounselors).map((specialization) => (
        <div key={specialization} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {specialization}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedCounselors[specialization].map((counselor) => (
              <div
                key={counselor.id}
                className="bg-gray-light shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-white text-center"
              >
                <h3 className=" text-gray-dark text-xl font-bold mb-2">
                  {counselor.firstName} {counselor.lastName}
                </h3>
                <p className=" text-gray-dark text-md mb-1">
                  <strong>Email:</strong> {counselor.email}
                </p>
                <p className=" text-gray-dark text-md mb-1">
                  <strong>Phone:</strong> {counselor.phone}
                </p>
                <div className="mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleRequestAssistance(
                        counselor.id,
                        counselor.specializations
                      )
                    }
                  >
                    Request Assistance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserRequestSupport;
