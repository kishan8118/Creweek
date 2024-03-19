import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Themes from "../Pages/Themes";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Speakers from "../Pages/Speakers";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/speakers" element={<Speakers />} />

      {/* Executive Conference */}
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />

      <Route path="/themes" element={<Themes />} />
    </Routes>
  );
};

export default AllRoutes;
