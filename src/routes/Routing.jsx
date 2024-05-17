import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../components/Home";
import Login from "../components/Users/Login";
import Modal from "../components/AddTasks/Modal";
import TaskList from "../components/Tasks/TaskList";
import SignUp from "../components/Users/SignUp";
import TaskEmpty from "../components/Tasks/TaskEmpty";

const Routing = () => {
  const tasks = useSelector((store) => store.task.data);
  const completedTask = tasks.filter((task) => task.isCompleted);
  const dueTask = tasks.filter((task) => !task.isCompleted);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={
            <>
              <Modal />
              {tasks.length == 0 ? (
                <TaskEmpty
                  message={
                    "Awesome!, You don't have Any task. Enjoy Your Day😇"
                  }
                />
              ) : (
                <TaskList tasks={tasks} />
              )}
            </>
          }
        />
        <Route
          path="/completed"
          element={
            <>
              <Modal />
              {completedTask.length == 0 ? (
                <TaskEmpty message={"Please Check out your due task..."} />
              ) : (
                <TaskList tasks={completedTask} />
              )}
            </>
          }
        />
        <Route
          path="/due"
          element={
            <>
              <Modal />
              {dueTask.length == 0 ? (
                <TaskEmpty
                  message={"There is no due task, Have a Good day😇"}
                />
              ) : (
                <TaskList tasks={dueTask} />
              )}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default Routing;
