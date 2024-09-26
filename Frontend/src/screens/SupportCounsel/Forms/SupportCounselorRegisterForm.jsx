import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../authentication/AuthProvider";

function SupportCounselorRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    specializations: [],
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        let updatedSpecializations = [...prev.specializations];

        if (checked) {
          updatedSpecializations.push(value);
        } else {
          updatedSpecializations = updatedSpecializations.filter(
            (item) => item !== value
          );
        }

        return { ...prev, specializations: updatedSpecializations };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/counselor/register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          specializations: formData.specializations,
        }
      );

      if (
        response.data.message == "Support Counselor registered successfully"
      ) {
        setSuccess(response.data.message);
        console.log(response);
        login(response.data.token, response.data.role, response.data.id);
        navigate("/support-counsel-dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during registration.");
      }
    }
  };

  return (
    <>
      <div className=" dark:bg-gray-800 mb-24">
        <div className="flex min-h-[80vh] flex-col justify-center py-8 sm:px-6 lg:px-8">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Register as a Support Counselor
            </h1>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <div className="bg-black-100 dark:bg-gray-700 px-6 py-8 sm:rounded-lg sm:px-10 sm:py-10 lg:px-16 lg:py-12 sm:shadow">
              {error && <p className="text-red-500 text-center">{error}</p>}
              {success && (
                <p className="text-green-500 text-center">{success}</p>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <label className="block dark:text-white font-semibold mb-2">
                  Select your areas of expertise:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="legal"
                      name="specializations"
                      value="Legal"
                      className="checkbox checkbox-gray mr-2"
                      onChange={handleChange}
                    />
                    <label className="dark:text-white">Legal</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="financial"
                      name="specializations"
                      value="Financial"
                      className="checkbox checkbox-gray mr-2"
                      onChange={handleChange}
                    />
                    <label className="dark:text-white">Financial</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="resume_help"
                      name="specializations"
                      value="Resume Help"
                      className="checkbox checkbox-gray mr-2"
                      onChange={handleChange}
                    />
                    <label className="dark:text-white">Resume Help</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="mental_health"
                      name="specializations"
                      value="Mental Health"
                      className="checkbox checkbox-gray mr-2"
                      onChange={handleChange}
                    />
                    <label className="dark:text-white">Mental Health</label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-8 mt-2 p-2 text-sm font-medium text-white btn btn-lg text-lg"
                  >
                    Register as a Support Counselor
                  </button>
                </div>
              </form>
              <div className="text-center mt-4">
                <p className="text-gray-700 dark:text-white">
                  Already a Support Counselor?{" "}
                  <Link
                    to="/support-counsel-login"
                    className="text-indigo-500 hover:underline"
                  >
                    Click here to login!!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportCounselorRegisterForm;
