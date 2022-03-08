import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePath, routes } from "../../routes";
import NotFound from "../../pages/NotFound";
import UserProvider from "../../store/contexts/user";

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <UserProvider>
      <Routes>
        {routes.map((route) => (
          <Route
            index={RoutePath.HOME === route.path}
            path={route.path}
            element={<route.component />}
            key={route.name}
          ></Route>
        ))}
        <Route key="not-found" path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};

export default AppRoutes;
