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
                <input autoFocus type="text" className=" placeholder-gray-100 focus:outline-none bg-transparent py-2 border-none border-2 text-gray-200 rounded-lg w-3/4 p-1 caret-white" placeholder="Nom de la tâche"></input>

            </div>

        </div>
    </Modal>
  );
};

export default TasksCreationModal;
