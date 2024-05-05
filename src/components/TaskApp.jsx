import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Modal from "./Modal";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";

const TaskApp = () => {
  const tasks = useSelector((store) => store.task.data);
  const completedTask = tasks.filter(task => task.isCompleted);
  const dueTask = tasks.filter(task => !task.isCompleted);

  return (
    <div className="container w-full h-full">
      
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <TaskPage tasks={tasks} />
            }
          />
          <Route path="/completed" element={<TaskPage tasks={completedTask} />} />
          <Route path="/due" element={<TaskPage tasks={dueTask} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

// A component to encapsulate common elements like Modal and TaskList
const TaskPage = ({ tasks }) => (
  <>
    <Modal />
    <TaskList tasks={tasks} />
  </>
);

export default TaskApp;

