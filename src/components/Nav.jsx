import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container mx-auto h-[10%] md:flex md:justify-between items-center border">
      <div className="flex justify-between">
        <h1 className="text-4xl font-normal text-sky-500 p-1">
          <Link to="/">Task</Link>
        </h1>
        <p className="p-3 text-md hover:bg-blue-200 md:hover:text-xl md:border-none sm:block md:hidden  font-normal text-rose-700">
          <Link to="/login">login</Link>
        </p>
      </div>
      <div className="flex gap-0 justify-evenly  md:gap-4 mt-2 md:m-2 md:p-0 border">
        <p className="p-1  hover:bg-blue-200  md:hover:text-xl md:border-none  font-medium ">
          <Link to="/">All Tasks</Link>
        </p>
        <p className="p-1   hover:bg-blue-200 md:hover:text-xl md:border-none  font-medium ">
          <Link to="/due">Due Tasks</Link>
        </p>
        <p className="p-1  hover:bg-blue-200 md:hover:text-xl md:border-none  font-medium ">
          <Link to="/completed">Completed Tasks</Link>
        </p>
        <p className="p-1  hover:bg-blue-200 md:hover:text-xl md:border-none hidden md:block  font-normal text-rose-700">
          <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Nav;
