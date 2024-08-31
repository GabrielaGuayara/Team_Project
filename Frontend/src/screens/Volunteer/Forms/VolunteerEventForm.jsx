import React from "react";
import AddressAutocomplete from "../../../components/AddressAutocomplete";

function VolunteerEventForm() {
  return (
    <>
      <div className=" dark:bg-gray-800 mb-24">
        <div className="flex min-h-[80vh] flex-col justify-center py-8 sm:px-6 lg:px-8">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Add Your Volunteer Event
            </h1>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <div className="bg-white dark:bg-gray-700 px-6 py-8 sm:rounded-lg sm:px-10 sm:py-10 lg:px-16 lg:py-12 sm:shadow">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Name Of Event
                  </label>
                  <div className="mt-1">
                    <input
                      id="name-of-event"
                      type="text"
                      placeholder="The Name Of Your Event"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Event Organizer
                  </label>
                  <div className="mt-1">
                    <input
                      id="event-organizer"
                      type="text"
                      placeholder="The Name Of The Organizer Who's In Charge Of The Event"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Event Organizer Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Event Organizer's Email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Event Address
                  </label>
                  <div className="mt-1">
                    <AddressAutocomplete
                      placeHolderMessage={"Enter Your Event Address"}
                    />
                  </div>
                </div>

                <label className="block dark:text-white font-semibold mb-2">
                  What Type Of Volunteer Service Is Your Event?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="community_service"
                      name="volunteer_services"
                      value="Community Service"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Community Service</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="environmental"
                      name="volunteer_services"
                      value="Environmental"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Environmental</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="educational"
                      name="volunteer_services"
                      value="Educational"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Educational</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="healthcare"
                      name="volunteer_services"
                      value="Healthcare"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Healthcare</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="social_service"
                      name="volunteer_services"
                      value="Social Service"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Social Service</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="disaster_relief"
                      name="volunteer_services"
                      value="Disaster Relief"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Disaster Relief</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="animal_care"
                      name="volunteer_services"
                      value="Animal Care"
                      className="checkbox checkbox-primary mr-2"
                    />

                    <label className="dark:text-white">Animal Care</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="volunteer_services"
                      className="checkbox checkbox-primary mr-2"
                    />
                    <label className="dark:text-white">Virtual</label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-8 mt-2 p-2 text-sm font-medium text-white btn btn-lg  text-lg"
                  >
                    Lets Look For Volunteering Opportunities!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerEventForm;
