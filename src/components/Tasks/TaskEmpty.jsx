import React from "react";

const TaskEmpty = ({ message }) => {
  return (
    <div className="container mx-auto h-[73%] md:h-[81%] overflow-y-auto flex justify-center items-center">
      <p className="text-3xl text-center">{message}</p>
    </div>
  );
};

export default TaskEmpty;
