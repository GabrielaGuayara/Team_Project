import React from "react";
import { Link } from "react-router-dom";

function Volunteer() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat  bg-[url(https://images.pexels.com/photos/6646905/pexels-photo-6646905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
      <div className="">
        <div>
          <div className="flex justify-center">
            <button className="btn btn-lg  w-7/12 mt-72">
              <Link className="text-lg" to="/volunteersignup">
                Create A Volunteer Opportunities for your event!
              </Link>
            </button>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-lg w-7/12 m-5">
              Find Volunteer Opportunity Near You!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
