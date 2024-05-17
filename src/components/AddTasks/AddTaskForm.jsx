import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

const AddTaskForm = ({ closeModal }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  //   console.log(tasks);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl mt-6 text-blue-500 font-semibold ">Task</h1>
        <button className=" mb-10" onClick={closeModal}>
          ❌
        </button>
      </div>
      <form className="flex flex-col gap-3 mt-3 ">
        <input
          type="text"
          className="border bg-rose-100 p-1"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows="3"
          className="border bg-rose-100 p-1"
          placeholder="This is description"
          onChange={handleChange}
        ></textarea>

        <input
          type="date"
          name="dueDate"
          className="border w-2/3 md:w-[27%] bg-rose-100 text-black p-1"
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <button
            className="bg-green-400 text-white px-2 py-1 md:w-1/6 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>

          <button
            className="bg-red-500 px-2 py-1 text-white md:w-1/6 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
