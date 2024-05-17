import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
import validateField from "../../utils/Validate";

let initialData = {
  title: "",
  description: "",
  dueDate: "",
};
const AddTaskForm = ({ closeModal }) => {
  const [task, setTask] = useState(initialData, closeModal);
  const [taskError, setTaskError] = useState(initialData);

  //   console.log(tasks);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });

    // validate the task form
    let error = validateField(name, value, task);
    setTaskError({...taskError, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {};

    // validates all the form fields by calling validateField()
    Object.keys(task).forEach((fieldName) => {
      newFormErrors[fieldName] = validateField(fieldName, task[fieldName], task);
    });

    setTaskError(newFormErrors);
    //If any of the fields have errors, the form submission is aborted.
    if (Object.values(newFormErrors).some((error) => error)) {
      // toast.error("Some Error occured");
      return;
    }
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
        <div>
        <input
          type="text"
          className="border bg-rose-100 p-1"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
         {taskError.title && (
            <span className="text-red-500">{taskError.title}</span>
          )}
        </div>
        <div>
        <textarea
          name="description"
          rows="3"
          className="border bg-rose-100 p-1"
          placeholder="This is description"
          onChange={handleChange}
        ></textarea>
        {taskError.description && (
            <span className="text-red-500">{taskError.description}</span>
          )}
        
        </div>

        <div>
        <input
          type="date"
          name="dueDate"
          className="border w-2/3 md:w-[27%] bg-rose-100 text-black p-1"
          onChange={handleChange}
        />
        {
          taskError.dueDate && (
            <span className="text-red-500">{taskError.dueDate}</span>
          )
        }
        </div>
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
