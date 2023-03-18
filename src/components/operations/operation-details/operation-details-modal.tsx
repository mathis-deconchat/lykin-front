import React from "react";
import Modal from "react-modal";
import "./operation-details-modal.css";

type OperationDetailsProps = {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
  customStyles: any;
};

Modal.setAppElement("#root");

const OperationDetailsModal: React.FC<OperationDetailsProps> = (props) => {
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
        " rounded-t-xl h-2/5 absolute bottom-0 w-full  flex flex-col p-3 bg-white border-none focus:ring-0 focus:outline-none focus:border-0 hover:ring-0 hover:focus-0 active:border-0 active:ring-0"
      }
    >
      <div className="bg-dot h-8 w-full">
        <div className="bg-gray-300 rounded-full w-12 h-2 mr-auto ml-auto"></div>
      </div>
      <div className="flex space-x-2 items-center flex-col justify-start">
        <p className=" text-black px-5 w-fit py-1 rounded-full text-2xl">- 50,00€</p>
        <p className="text-gray-600">Dépensé par Mathis Deconchat</p>
      </div>
      <div className="border-l-4 border-blue-600  p-4 flex justify-center">
        <span className="font-bold bg-blue-600 rounded-md px-3 text-white py-1 ml-2">01/01/2023</span>
         <span className="font-bold bg-blue-600 rounded-md px-3 text-white py-1 ml-2">Couple</span>
         <span className="font-bold bg-blue-600 rounded-md px-3 text-white py-1 ml-2">Courses</span>

      </div>
      <div className="mt-3 bg-gray-200 rounded-lg min-h-[6rem] p-3">
        <p>Une courte description de la dépense</p>
      </div>
    </Modal>
  );
};

export default OperationDetailsModal;
