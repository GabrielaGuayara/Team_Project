import React from "react";

export default function VolunteerForm() {
  return (
    <>
      <div className=" dark:bg-gray-800 mb-24">
        <div className="flex min-h-[80vh] flex-col justify-center py-8 sm:px-6 lg:px-8">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Find Volunteer Opportunities
            </h1>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-3xl">
            <div className="bg-white dark:bg-gray-700 px-6 py-8 sm:rounded-lg sm:px-10 sm:py-10 lg:px-16 lg:py-12 sm:shadow">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="first-name"
                      type="text"
                      required
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
                      id="last-name"
                      type="text"
                      required
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
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    />
                  </div>
                </div>

                <label className="block dark:text-white font-semibold mb-2">
                  Select your volunteer interests:
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

                <div className="flex items-center justify-start">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <label className="ml-2 block text-sm text-gray-900 dark:text-white">
                      Remember me so I don't have to fill out this form again
                    </label>
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
