import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          HopeBridge
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
          <li>
            <Link className="text-lg" to="/employment">
              Employment
            </Link>
          </li>
          <li>
            <Link className="text-lg" to="/education">
              Education
            </Link>
          </li>
          <li>
            <Link className="text-lg" to="/support-counsel">
              Support Counsel
            </Link>
          </li>

          <li>
            <details className="relative z-50">
              <summary className="text-lg">Services</summary>
              <ul className="bg-base-100 rounded-t-none p-1">
                <li>
                  <Link className="text-lg" to="/legal">
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

          <li className="ml-4">
            <Link to="/login" className="btn  btn-primary text-lg">
              Login
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/register" className="btn btn-primary text-lg">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
