import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
import NotFound from "../../pages/NotFound";
import PrivateRoute from "../../components/PrivateRoute";
import Login from "../../pages/Login";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { useEffect, useState } from "react";

const AppRoutes: React.FC = () => {
  const { userLogged } = useAuth();

  return (
    <Routes>
      <Route
        key="main"
        path="/"
        element={userLogged() ? <Navigate to={"/home"} /> : <Login />}
      />
      <Route key="not-found" path="/*" element={<NotFound />} />
      {routes.map((route) => {
        return (
          <Route
            key={route.name}
            path={route.path}
            element={
              <PrivateRoute>
                <route.component />
              </PrivateRoute>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
