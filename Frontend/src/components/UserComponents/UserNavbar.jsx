import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";

function UserNavbar() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar bg-base-200 relative z-50">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          HopeBridge - User
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
          <li></li>

          <li>
            <Link className="text-lg" to="/employment">
              Employment
            </Link>
          </li>

          <li></li>
          <li>
            <Link className="text-lg" to="/education">
              Education
            </Link>
          </li>
          <li></li>
          <li>
            <Link className="text-lg" to="/support-counsel">
              Support Counsel
            </Link>
          </li>
          <li></li>
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
          <li></li>
          <li>
            <details className="relative z-50">
              <summary className="text-lg">User</summary>
              <ul className="bg-base-100 rounded-t-none p-1">
                <li>
                  <a>User Info</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserNavbar;