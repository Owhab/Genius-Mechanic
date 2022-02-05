import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="secondary" />;
  }

  return user.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
