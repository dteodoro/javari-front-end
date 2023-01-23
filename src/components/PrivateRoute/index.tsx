import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/Auth/AuthContext";

interface RoutePropsData {
  children: ReactElement;
}

const PrivateRoute: React.FC<RoutePropsData> = ({ children }) => {
  const { userLogged } = useAuth();
  if (!userLogged()) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default PrivateRoute;
