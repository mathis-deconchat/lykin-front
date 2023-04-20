import React, { useEffect } from "react";
import Modal from "react-modal";
import Divider from "../../common/divider";
import "./tasks-creation-modal.css";
import { ClockIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import {
  CreateTaskInput,
  useCreateTaskMutation,
} from "../../../generated/graphql-types";
import { ApolloClient } from "@apollo/client";
import apolloClient from "../../../shared/apollo/apollo.provider";

type TaskCreationModalProps = {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
};

const TasksCreationModal: React.FC<TaskCreationModalProps> = (props) => {
  const [createTaskMutation, { data, loading, error }] =
    useCreateTaskMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(error);
  }, [error]);

  const onSubmit =  (data: any) => {
    console.log('Submit')
    console.log(data)
    const { name, description } = data;

    const taskCreateInput: CreateTaskInput = {
      task: {
        name,
        description,
        statusId: 1,
      },
    };

    const i = createTaskMutation({
      variables: {
        input: taskCreateInput,
      }, onCompleted: (data) => {
        console.log(data)
      }, onError: (error) => {
        console.log(error)
      }
    });
    console.log(i)
    props.closeModal();
    apolloClient.refetchQueries({include: ['GetAllTasks']})
  };
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
        "absolute bottom-0 rounded-xl  w-full  flex flex-col p-3 border-none focus:ring-0 focus:outline-none focus:border-0 hover:ring-0 hover:focus-0 active:border-0 active:ring-0"
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 rounded-xl w-full p-4">
          <div>
            <input
              {...register("name", { required: true })}
              autoFocus
              className="py-3 text-lg placeholder-gray-100 placeholder:font-bold outline-transparent placeholder:opacity-50  text-gray-200 rounded-lg w-3/4 p-1 caret-white bg-transparent"
              placeholder="Nom de la tâche"
            ></input>

            <input
              {...register("description", { required: true })}
              type="textarea"
              className="text-white mt-1 p-1 bg-blue-600 placeholder-gray-100  outline-transparent placeholder:opacity-50  bg-transparent border-transparent focus:outline-none focus:ring-0 w-full caret-white"
              placeholder="Description"
            ></input>
            <div className="flex space-x-2 overflow-x-auto mt-4 w-full pb-3">
              <div className=" bg-blue-800 py-1 border-spacing-4 w-fit text-white text-opacity-90 px-2  rounded-xl flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 stroke-2" />
                <p className=" whitespace-nowrap">Aujourd'hui</p>
              </div>
              <div className=" border-gray-300 border-[1px] py-1 border-spacing-4 w-fit text-white text-opacity-90 px-2  rounded-xl flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 stroke-2" />
                <p className=" whitespace-nowrap">Demain</p>
              </div>
              <div className=" border-gray-300 border-[1px] py-1 border-spacing-4 w-fit text-white text-opacity-90 px-2  rounded-xl flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 stroke-2" />
                <p className=" whitespace-nowrap">Dans la semaine</p>
              </div>
              <div className=" border-gray-300 border-[1px] py-1 border-spacing-4 w-fit text-white text-opacity-90 px-2  rounded-xl flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 stroke-2" />
                <p className=" whitespace-nowrap">Dans le mois</p>
              </div>
            </div>
            <div className="w-full flex justify-end mt-3">
              <button type="submit" className="rounded-xl bg-blue-800 p-2">
                <PaperAirplaneIcon className="h-5 w-5 stroke-2 text-white" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default TasksCreationModal;
