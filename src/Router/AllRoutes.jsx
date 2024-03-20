import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Themes from "../Pages/Themes";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Speakers from "../Pages/Speakers";
import SessionsFormats from "../Pages/SessionsFormats";
import Agenda from "../Pages/Agenda";
import AgoraRegisterPage from "../Pages/AgoraRegisterPage";
import IntheNews from "../Pages/IntheNews";
import PressRelease from "../Pages/PressRelease";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/speakers" element={<Speakers />} />

      {/* Executive Conference */}
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/sessions-formats" element={<SessionsFormats />} />

      {/* Agora */}
      <Route path="/agora-register" element={<AgoraRegisterPage />} />

      {/* Media */}
      <Route path="/news" element={<IntheNews />} />
      <Route path="/press" element={<PressRelease />} />

      <Route path="/themes" element={<Themes />} />
    </Routes>
  );
};

export default AllRoutes;
