import React from "react";
import eduBackground from "../assets/eduBackground.png"
import { Link } from "react-router-dom";
const Education = () => {
  return (
    <>
    <section id="eduheader" className="w-full min-h-[85vh] bg-center bg-no-repeat bg-yellow flex justify-center" style={{ backgroundImage: `url(${eduBackground})` }}>
        <div className="flex flex-row justify-center items-end p-10 ">
          <div className="flex space-x-4">
            <Link
              className="text-lg btn btn-lg  w-4/12 mt-7 bg-red text-white"
              to="/financialAidForm"
            >
             Financial Aid Eligibility Form
            </Link>
              
            <Link
              className="text-lg btn btn-lg  w-4/12 mt-7 bg-red text-white"
              to="/eslCenters"
            >
             Find ESL Centers
            </Link>

            {/* <Link
              className="text-lg btn btn-lg  w-3/12 mt-7 bg-red text-white"
              to="/questions-and-answers"
            >
             Suggest an update
            </Link> */}
            <Link
              className="text-lg btn btn-lg  w-4/12 mt-7 bg-red text-white"
              to="/events"
            >
            Educational Events
            </Link>
          </div>
        </div>
    </section>

    </>
  )
}

export default Education
