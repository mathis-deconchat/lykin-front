import React from "react";
import TasksCreationModal from "../../components/tasks/tasks-creation-modal/tasks-creation-modal";
import { useGetAllTasksQuery } from "../../generated/graphql-types";

function convertDateToYearMonth(dateString: string) {
  // Create a new Date object from the input string
  const date = new Date(dateString);
  
  // Extract the year and month from the date object
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
  const day = (date.getDate()).toString().padStart(2, '0'); // Add leading zero if needed
  // Return the year and month as a string in the format "yyyy-mm"
  return `${year}-${month}-${day}`;
}

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
        <p className="ml-6 mt-5 text-xl font-semibold">Tâches à faire</p>
        <div className="p-3 m-2 space-y-2">

        
        {
          (data && data.tasks && !loading) && data?.tasks.nodes.map((task: any) => {
            return (
              <div className="w-full h-16 bg-white rounded-lg shadow-lg flex flex-row justify-between items-center p-4">
                <div className="flex flex-col">
                  <p className="font-bold">{task.name}</p>
                  <p className="text-gray-600">{task.description}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-gray-600">{convertDateToYearMonth(task.createdAt)}</p>
                </div>
              </div>
            )
          })
        }
        </div>

      </div>
        <button className=" absolute bottom-24 right-2 px-5 bg-blue-600 rounded-lg py-1 text-white w-1/2" onClick={() => openTaskCreationModal()}>Créer</button>

    </>
  );
};

export default TasksPage;
