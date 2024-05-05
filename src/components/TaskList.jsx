import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  {
    console.log(tasks);
  }
  return (
    <div className="container mx-auto h-[80%] overflow-y-auto border border-black">
      {tasks.length === 0 ? (
        <div className="container h-full flex justify-center items-center">
          <p className="text-3xl text-center">
            Awesome!, You don't have Any task. Enjoy Your Day😇
          </p>
        </div>
      ) : (
        <div className="overflow-auto">
          {tasks.map((item) => (
            <TaskCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
