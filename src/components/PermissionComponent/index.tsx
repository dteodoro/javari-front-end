import React from "react";
import { useAuth } from "../../store/contexts/Auth/AuthContext";

interface PermissionRole {
  role?: string;
}

const PermissionComponent: React.FC<PermissionRole> = ({ role, children }) => {
  const { user } = useAuth();
  const userRoles = user?.roles?.split(";");
  const hasPermission = role == undefined || userRoles?.includes(role);
  return <>{hasPermission && children}</>;
};

export default PermissionComponent;
