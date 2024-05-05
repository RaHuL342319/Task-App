import React, { useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="container mx-auto w-full h-full overflow-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
