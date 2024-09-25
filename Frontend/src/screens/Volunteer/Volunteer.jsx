import React from "react";
import { Link } from "react-router-dom";

function Volunteer() {
  return (
    <div className="opacity-60">
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat  bg-[url(https://images.pexels.com/photos/6646905/pexels-photo-6646905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
        <div>
          <div className="flex justify-center">
            <Link
              className="text-lg btn btn-lg  w-7/12 mt-72"
              to="/financialAidForm"
            >
              Create A Volunteer Opportunities for your event!
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              className="btn btn-lg w-7/12 m-5 text-lg"
              to="/volunteer-sign-up"
            >
              Find Volunteer Opportunity Near You!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
