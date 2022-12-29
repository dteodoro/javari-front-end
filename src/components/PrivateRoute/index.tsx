import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { USER_ROLE } from "../../types/constants";

interface RoutePropsData {
  role?: USER_ROLE;
  children: ReactElement;
}

const PrivateRoute: React.FC<RoutePropsData> = ({ role, children }) => {
  const { userLogged } = useAuth();
  return userLogged() ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
