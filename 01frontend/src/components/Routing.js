import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Profile from "./Profile";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} 
          
        />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Routing;
