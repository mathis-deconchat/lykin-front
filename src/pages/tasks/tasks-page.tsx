import React from "react";
import TasksCreationModal from "../../components/tasks/tasks-creation-modal/tasks-creation-modal";

const TasksPage = () => {
  const [modalIsOpenTaskCreation, setModalIsOpenTaskCreation] =
    React.useState(false);
  function openTaskCreationModal() {
    setModalIsOpenTaskCreation(true);
  }

  function closeTaskCreationModal() {
    setModalIsOpenTaskCreation(false);
  }

  return (
    <>
      <TasksCreationModal
        modalIsOpen={modalIsOpenTaskCreation}
        closeModal={closeTaskCreationModal}
        afterOpenModal={openTaskCreationModal}
      />
        <button className=" absolute bottom-24 right-2 px-5 bg-blue-600 rounded-lg py-1 text-white w-1/2" onClick={() => openTaskCreationModal()}>Créer</button>
      <div className="rounded-t-2xl bg-gray-100 w-full flex flex-col mb-14  p-4">
        <p className="font-bold text-xl">A faire</p>
      </div>
    </>
  );
};

export default TasksPage;
