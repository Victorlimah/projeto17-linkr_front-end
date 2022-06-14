import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";
import Login from "../pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<h1>This is a register page</h1>} />
        <Route path="/dashboard" element={<h1>This is a dashboard page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
