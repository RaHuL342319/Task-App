import React, { useState } from "react";
import MyModal from "./MyModal";
import { removeAllTask } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const dispatch = useDispatch();

  return (
    <div className="container h-[6%] flex  items-center mt-2 md:mt-1 border ">
      <button
        className="px-2 py-2 md:py-1  bg-green-400 rounded text-white m-2"
        onClick={openModal}
      >
        Add a new Task
      </button>

      <button
        className="px-2 py-2 md:py-1 bg-red-500 rounded text-white m-2"
        onClick={() => dispatch(removeAllTask())}
      >
        Remove all Task
      </button>
      {showModal && <MyModal closeModal={closeModal} />}
    </div>
  );
};

export default Modal;
