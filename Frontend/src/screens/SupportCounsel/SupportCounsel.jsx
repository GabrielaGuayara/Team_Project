import React from "react";
import { Link } from "react-router-dom";

function SupportCounsel() {
  return (
    <div className="opacity-90">
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg)]">
        <div className="bg-gray-900 bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-8">Support Counsel</h1>
          <p className="text-xl mb-8 w-3/4 lg:w-1/2">
            Support Counsel is a volunteer service offering professional help in
            crucial areas like legal advice, financial guidance,resume building
            and more!. Our mission is to empower individuals by providing free,
            expert assistance to those in need regardless of how small it may
            seem!
          </p>
          <div className="flex flex-col items-center">
            <Link className="w-7/12" to="/support-counsel-register">
              <button className="btn btn-lg w-full my-4">
                Become a Support Counselor
              </button>
            </Link>
            <Link className="w-7/12" to="/support-counsel-assistance">
              <button className="btn s btn-lg w-full my-4">
                Find Assistance
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportCounsel;
