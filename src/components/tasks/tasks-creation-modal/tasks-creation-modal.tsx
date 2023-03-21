import React from "react";
import Modal from "react-modal";
import "./tasks-creation-modal.css";

type TaskCreationModalProps = {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
};

const TasksCreationModal: React.FC<TaskCreationModalProps> = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(70, 70, 70, 0.5)",
        },
      }}
      contentLabel="OperationDetailsModal"
      className={
        " rounded-xl absolute bottom-0 w-full  flex flex-col p-3 border-none focus:ring-0 focus:outline-none focus:border-0 hover:ring-0 hover:focus-0 active:border-0 active:ring-0"
      }
    >
      <div className="bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 rounded-xl w-full p-4">
        <div>
          <input
            autoFocus
            type="text"
            className=" placeholder-gray-100 outline-none border-transparent focus:border-0 focus:outline-offset-0 focus:outline-none visited:border-0 focus:border-none active:outline-none active:border-0 hover:outline-none    hover:border-0 bg-transparent py-2 border-none hover:outline-offset-0 border-0  text-gray-200 rounded-lg w-3/4 p-1 caret-white"
            placeholder="Nom de la tâche"
          ></input>
          <input
            type="text"
            className="mt-3 placeholder-gray-100 bg-transparent border-transparent focus:outline-none focus:ring-0 w-full caret-white"
            placeholder="Description"
          ></input>
        </div>
      </div>
    </Modal>
  );
};

export default TasksCreationModal;
