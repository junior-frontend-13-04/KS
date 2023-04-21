import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Auth/Login/Login";
import Goods from "../pages/Goods/Goods";

const CustomerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default CustomerRoutes;
