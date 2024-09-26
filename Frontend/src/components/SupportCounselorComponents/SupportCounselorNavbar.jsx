import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";

function SupportCounselorNavbar() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/dashboard">
          HopeBridge - Counselor
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
          <li>
            <Link className="text-lg" to="/support-counsel-dashboard">
              Assistance Requests
            </Link>
          </li>

          <li>
            <details className="relative z-50">
              <summary className="text-lg">User</summary>
              <ul className="bg-base-100 rounded-t-none p-1">
                <li>
                  <Link className="text-lg" to="/profile">
                    User Info
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-lg">
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SupportCounselorNavbar;
