import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../config/auth";

const ProtectedRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  console.log(authToken);

  if (!authToken) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
