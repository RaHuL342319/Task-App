import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TaskApp from "./components/Tasks/TaskApp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto w-full h-screen">
        <TaskApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
