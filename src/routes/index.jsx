import { useState } from "react";
import Login from "../pages/Login";
import Initial from "../pages/Initial";
import Register from "../pages/Register";
import DataContext from "../providers/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "../pages/Timeline";
import Hashtag from "../pages/Hashtag"

export default function Router() {
  const [ data, setData ] = useState({API: "http://localhost:5050", token: "", user: {}});

  return (
    <DataContext.Provider value={{data, setData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
