import React from "react";
import TasksCreationModal from "../../components/tasks/tasks-creation-modal/tasks-creation-modal";
import { useGetAllTasksQuery } from "../../generated/graphql-types";

const TasksPage = () => {
  const {data, loading, error} = useGetAllTasksQuery({fetchPolicy: 'network-only'})
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
      <div className="h-1/2 w-full">
        {
          (data && data.tasks && !loading) && data?.tasks.nodes.map((task: any) => {
            return (
              <div className="w-full h-16 bg-white rounded-lg shadow-lg flex flex-row justify-between items-center p-4">
                <div className="flex flex-col">
                  <p className="font-bold">{task.name}</p>
                  <p className="text-gray-600">{task.description}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-gray-600">{task.status.name}</p>
                </div>
              </div>
            )
          })
        }

      </div>
        <button className=" absolute bottom-24 right-2 px-5 bg-blue-600 rounded-lg py-1 text-white w-1/2" onClick={() => openTaskCreationModal()}>Créer</button>
      <div className="rounded-t-2xl bg-gray-100 w-full flex flex-col mb-14  p-4">
        <p className="font-bold text-xl">A faire</p>
      </div>
    </>
  );
};

export default TasksPage;
