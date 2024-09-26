import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../authentication/AuthProvider";

function SupportCounselorLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/counselor/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.message === "Login Successful") {
        setSuccess(response.data.message);
        login(response.data.token, response.data.role, response.data.id);
        navigate("/support-counsel-dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during login.");
      }
    }
  };

  return (
    <>
      <div className=" dark:bg-gray-800 mb-24">
        <div className="flex min-h-[80vh] flex-col justify-center py-8 sm:px-6 lg:px-8">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Support Counselor Login
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
                    Email Address
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
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-8 mt-2 p-2 text-sm font-medium text-white btn btn-lg text-lg"
                  >
                    Login as a Support Counselor
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-gray-700 dark:text-white">
                  Don't have an account?{" "}
                  <Link
                    to="/support-counsel-register"
                    className="text-indigo-500 hover:underline"
                  >
                    Click here to register!!
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

export default SupportCounselorLoginForm;
