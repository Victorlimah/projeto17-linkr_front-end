import { useState } from "react";
import Login from "../pages/Login";
import Initial from "../pages/Initial";
import Register from "../pages/Register";
import DataContext from "../providers/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "../pages/Timeline";
import TimelineUser from "../pages/TimelineUser";
import Hashtag from "../pages/Hashtag"

export default function Router() {
  const [ data, setData ] = useState({API: "https://g3-linkr.herokuapp.com", token: "", user: {}});
  const [idUser, setIdUser] = useState(0);

  return (
    <DataContext.Provider value={{data, setData, idUser, setIdUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/user/:id" element={<TimelineUser />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
