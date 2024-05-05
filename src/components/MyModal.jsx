import AddTaskForm from "./AddTaskForm";

const MyModal = ({ closeModal }) => {
  return (
    <div>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-blue-400 to-transparent"
        onClick={closeModal}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 pt-2 pb-6 rounded-lg shadow-md sm:w-[100%] md:w-[40%]">
        <AddTaskForm closeModal={closeModal} />
      </div>
    </div>
  );
};

export default MyModal;
