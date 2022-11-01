import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import React from "react";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/sessions" element={<Login />} />
      <Route path="/users" element={<Register />} />

      <Route path="/profile" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/sessions" />} />
    </Routes>
  );
};

export default RoutesMain;
