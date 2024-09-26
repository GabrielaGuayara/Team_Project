import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";

const UserPrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Component /> : <Navigate to="/register" />;
};

export default UserPrivateRoute;
