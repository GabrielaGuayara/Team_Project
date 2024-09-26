import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";

const SupportCounselPrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/support-counsel-form" />
  );
};

export default SupportCounselPrivateRoute;
