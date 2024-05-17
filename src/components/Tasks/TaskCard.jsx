import React, { useState } from "react";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { deleteTaskById, updateTaskById } from "../../features/tasks/taskSlice";
import { useDispatch } from "react-redux";

const TaskCard = ({ item }) => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState(item);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    let task = { ...taskData, [name]: value };
    setTaskData(task);
    dispatch(updateTaskById(task));
  };

  const handleButton = (taskData) => {
    setEdit(false);
    dispatch(updateTaskById(taskData));
  };

  const isPastDue = new Date(taskData.dueDate) < new Date();

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteTaskById(id));
  };

  const handleCompleted = (taskData) => {
    let task = { ...taskData, isCompleted: !taskData.isCompleted };
    setTaskData(task);
    dispatch(updateTaskById(task));
  };
  return (
    <div className="container mx-auto  w-full  md:w-[60%] flex flex-col p-1 md:p-2 border shadow-2xl mt-2 md:mt-0 rounded-b-lg">
      {edit ? (
        <div className="container">
          <div className="w-full">
            <div className="mt-1.5">
              <input
                type="text"
                className="border-b bg-gray-100  px-1  border-black focus:border-b-2 focus:border-black focus:outline-none text-xl font-bold md:w-[40%]"
                name="title"
                value={taskData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mt-1.5">
              <textarea
                type="text"
                className=" text-lg text-gray-500 font-normal w-[80%] border-b px-1 border-black bg-gray-100 focus:border-b-2 focus:border-black focus:outline-none h-auto"
                name="description"
                value={taskData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mt-1.5">
              <input
                type="date"
                className="border-b bg-gray-100  px-1 border-black focus:border-b-2 focus:border-black focus:outline-none  md:w-[20%]"
                name="dueDate"
                onChange={handleChange}
                value={taskData.dueDate}
              />
            </div>
            <div className="flex justify-between mt-2">
              <button
                className="bg-red-500 text-white px-2 border rounded"
                onClick={handleButton}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-2 rounded"
                onClick={handleButton}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container flex bg-gray-200 p-1">
          <div className="w-[80%]">
            <div className="mt-1">
              <p className="text-md md:text-xl font-semibold text-start w-full md:w-[40%] overflow-hidden hover:overflow-auto">
                {taskData.title}
              </p>
            </div>
            <div className="mt-1">
              <p className=" text-xs md:text-lg font-normal  text-gray-500 line text-start w-full overflow-hidden text-ellipsis hover:overflow-auto">
                {taskData.description}
              </p>
            </div>
            <div className="mt-1">
              <p
                className={`text-xs md:text-md text-start md:w-[20%]  ${
                  isPastDue ? "text-red-700" : "text-green-500"
                }`}
              >
                {taskData.dueDate}
              </p>
            </div>
          </div>
          <div className="container w-[20%] flex flex-col content-between gap-6 ">
            <div className=" container h-full text-end flex flex-col border justify-between">
              <div
                className="flex border justify-end gap-3"
                
              >
                {/* <div onClick={() => handleCompleted(taskData)}>
                <button>✅</button>

                </div> */}
                <input type="checkbox"
                   checked={taskData.isCompleted} 
                   onChange={() => handleCompleted(taskData)} />
                <img
                  src={editIcon}
                  alt=""
                  className="w-5 h-5 border"
                  onClick={() => setEdit(true)}
                />

                <img
                  src={deleteIcon}
                  alt=""
                  className="w-5 h-5 hover:bg-blue-500 hover:text-white"
                  onClick={() => {
                    handleDelete(taskData.id);
                  }}
                />
              </div>
              <div>
                <button>{taskData.isCompleted ? "🟢" : "🔴"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TaskCard;
