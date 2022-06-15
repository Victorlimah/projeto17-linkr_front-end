import { useState } from "react";
import Login from "../pages/Login";
import Initial from "../pages/Initial";
import Register from "../pages/Register";
import DataContext from "../providers/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "../pages/Timeline";

export default function Router() {
  const [ data, setData ] = useState({API: "http://localhost:9999", token: "", user: {}});
  //https://g3-linkr.herokuapp.com

  return (
    <DataContext.Provider value={{data, setData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
