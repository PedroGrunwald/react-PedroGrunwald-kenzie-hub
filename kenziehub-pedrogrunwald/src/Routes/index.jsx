import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sessions" element={<Login/>} />
        <Route path="/users" element={<Register/>} />
        <Route path="/profile" element={<Dashboard/>} />
        <Route path="*" element={<Navigate to ='/sessions'/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
