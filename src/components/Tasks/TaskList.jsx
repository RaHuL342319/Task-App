import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  {
    console.log(tasks);
  }
  return (
    <div className="container mx-auto h-[73%] md:h-[81%] overflow-y-auto">
      <div className="overflow-auto">
        {tasks.map((item) => (
          <TaskCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
