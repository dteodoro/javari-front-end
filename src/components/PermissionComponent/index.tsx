import React from "react";
import { USER_ROLE } from "../../types/constants";

interface PermissionRole {
  role?: USER_ROLE;
}

const PermissionComponent: React.FC<PermissionRole> = ({ role, children }) => {
  return <>{role !== USER_ROLE.ROLE_ADMIN && children}</>;
};

export default PermissionComponent;
