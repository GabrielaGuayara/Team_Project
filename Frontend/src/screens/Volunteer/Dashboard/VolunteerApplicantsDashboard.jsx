import React from "react";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/Card";
import Applicants from "../../../json/Applicants";

const VolunteerApplicantsDashboard = () => {
  let lastEvent = "";
  let ApplicantsSorted = Applicants.sort(function (a, b) {
    return a.event.localeCompare(b.event);
  });
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-4">
            Volunteer Applicants For Your Event
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {ApplicantsSorted.map((applicant, i) => {
              const showHeader = applicant.event !== lastEvent;
              lastEvent = applicant.event;
              return (
                <React.Fragment key={i}>
                  {showHeader && (
                    <>
                      <h2 className="text-2xl font-semibold mb-4 col-span-full">
                        {applicant.event}
                      </h2>
                      <hr className="border-t border-gray-600 mb-4 col-span-full" />
                    </>
                  )}

                  <Card
                    key={i}
                    firstName={applicant.firstName}
                    lastName={applicant.lastName}
                    email={applicant.email}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerApplicantsDashboard;
