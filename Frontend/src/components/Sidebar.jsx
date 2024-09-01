import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <div className="text-2xl font-bold mb-6">Welcome!</div>
      <ul className="space-y-4">
        <li>
          <a className="block py-2 px-4 rounded hover:bg-gray-700">Home</a>
        </li>
        <li>
          <a className="block py-2 px-4 rounded hover:bg-gray-700">
            Applicants
          </a>
        </li>
        <li>
          <a className="block py-2 px-4 rounded hover:bg-gray-700">Events</a>
        </li>
        <li>
          <a className="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
