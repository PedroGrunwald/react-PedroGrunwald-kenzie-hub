import { Routes, Route, BrowserRouter } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
