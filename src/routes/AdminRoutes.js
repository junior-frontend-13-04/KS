import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/Admin/AdminPage";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
