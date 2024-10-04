import React from "react";
import { Link } from "react-router-dom";
import EmploymentImg from "../assets/EmploymentImg.jpg"; // Provide the correct path to the image file

function Employment() {
  return (
    <div className="opacity-60">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${EmploymentImg})` }}
      >
        <div>
          <div className="flex justify-center">
            <Link
              className="text-lg btn btn-lg w-7/12 mt-72 bg-neutral-900 text-white" // Add the CSS styles here
              to="/job-seeker"
            >
              Are you looking for a Job? Click here to find out opportunities!
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              className="btn btn-lg w-7/12 m-5 text-lg bg-neutral-900 text-white" 
              to="/recruiter"
            >
              Are you recruiting? Let us help you find the right candidate!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employment;

