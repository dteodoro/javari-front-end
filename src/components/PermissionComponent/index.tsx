import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { API_CORE } from "../../types/constants";

interface PermissionRole {
  role?: string;
}

const PermissionComponent: React.FC<PermissionRole> = ({ role, children }) => {
  const { bettor } = useAuth();
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      if (!bettor?.userId) {
        setHasPermission(false);
      } else if (role) {
        const response = await api.get(
          `${API_CORE}/bettor/${bettor?.userId}/${role}`
        );
        setHasPermission(response.data);
      } else {
        setHasPermission(true);
      }
    }
    fetchData();
  }, [bettor]);
  return <>{hasPermission && children}</>;
};

export default PermissionComponent;
