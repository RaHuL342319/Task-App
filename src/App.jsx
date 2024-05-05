import React from "react";
import TaskApp from "./components/TaskApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto w-full h-screen">
        {/* <Cart /> */}

        <TaskApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
