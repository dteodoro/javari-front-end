import { useNavigate } from "react-router-dom";
import Login from "../../../pages/Login";
import { useAuth } from "./AuthContext";

const RequireAuth: React.FC = ({ children }) => {
  const { userLogged } = useAuth();
  const navigate = useNavigate();
  if (!userLogged()) {
    navigate("/login");
  }
  return <>{children}</>;
};

export default RequireAuth;
