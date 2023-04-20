import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";

const MainRoutes = () => {
  const location = useLocation();
  const PATHES = {
    "/admin": 1,
  };

  const role = "ROLE_CUSTOMER";

  const ROLES = {
    ROLE_ADMIN: <AdminRoutes />,
    ROLE_CUSTOMER: <CustomerRoutes />,
    ROLE_UNAUTHORIZED: <CustomerRoutes />,
  };
  return (
    <>
      {ROLES[role]}
      {!PATHES[location.pathname] ? <Navbar /> : null}
    </>
  );
};

export default MainRoutes;
