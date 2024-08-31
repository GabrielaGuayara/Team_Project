import React from "react";

export default function VolunteerForm() {
  return (
    <>
      <div class="bg-gray-50 dark:bg-gray-800">
        <div class="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div class="text-center sm:mx-auto sm:w-full sm:max-w-md">
            <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">
              Volunteer Signup
            </h1>
          </div>
          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white dark:bg-gray-700 px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
              <form class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      type="text"
                      data-testid="username"
                      required=""
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      data-testid="password"
                      autocomplete="current-password"
                      required=""
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                      value=""
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 disabled:cursor-wait disabled:opacity-50"
                    />
                    <label
                      for="remember_me"
                      class="ml-2 block text-sm text-gray-900 dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                  <div class="text-sm">
                    <a
                      class="font-medium text-indigo-400 hover:text-indigo-500"
                      href=""
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    data-testid="login"
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                  >
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    Sign In
                  </button>
                </div>
              </form>
              <div class="mt-6">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>
              <div class="m-auto mt-6 w-fit md:mt-8">
                <span class="m-auto dark:text-gray-400">
                  Don't have an account?
                  <a
                    class="font-semibold text-indigo-600 dark:text-indigo-100"
                    href="/register"
                  >
                    Create Account
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
