import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          HopeBridge
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
          <li></li>

          <li>
            <Link className="text-lg" to="Employment">
              Employment
            </Link>
          </li>

          <li></li>
          <li>
            <Link className="text-lg" to="education">
              Education
            </Link>
          </li>
          <li></li>
          <li>
            <Link className="text-lg" to="/volunteer">
              Volunteer
            </Link>
          </li>
          <li></li>
          <li>
            <details>
              <summary className="text-lg">Services</summary>
              <ul className="bg-base-100 rounded-t-none p-1">
                <li>
                  <Link className="text-lg" to="legal">
                    Legal Assistance
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/healthcare">
                    Healthcare
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li></li>
          <li>
            <details>
              <summary className="text-lg">User</summary>
              <ul className="bg-base-100 rounded-t-none p-1">
                <li>
                  <a>User Info</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
