import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Izd from "./Izd";
import One from "./texts/one";
import Two from "./texts/Two";
import Three from "./texts/Three";
import Four from "./texts/Four";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/history" element={<History />}></Route>
      <Route path="/izd" element={<Izd />}></Route>
      <Route path="/texts/one" element={<One />}></Route>
      <Route path="/texts/two" element={<Two />}></Route>
      <Route path="/texts/Three" element={<Three />}></Route>
      <Route path="/texts/Four" element={<Four />}></Route>
    </Routes>
  );
};

export default Routers;
