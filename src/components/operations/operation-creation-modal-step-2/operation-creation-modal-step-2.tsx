import React, { useEffect } from "react";
import Modal from "react-modal";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import CategoryOperationCard from "../../category/category-operation-card/category-operation-card";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import "./operation-creation-modal-step-2.css";
import {
  Operation,
  OperationCategory,
  useCreateOperationCategoryMutation,
  useDeleteOperationCategoryByIdMutation,
  useGetOperationsCategoriesQuery,
} from "../../../generated/graphql-types";
import { useForm } from "react-hook-form";

type OperationCreationModalStep2Props = {
  modalIsOpen: boolean;
  operationValue: Partial<Operation | null>;
  closeModal: () => void;
  createOperation: () => void;
  updateOperation: (newData: Partial<Operation | OperationCategory>) => void;
  deleteState: () => void;
};

// Create a type that extends the Type OperationCatgory and add a field (justcreated'

export type OperationCategoryWithJustCreated = OperationCategory & {
  justCreated: boolean;
};

const OperationCreationModalStep2: React.FC<
  OperationCreationModalStep2Props
> = (props) => {
  const [isCreateCategory, setIsCreateCategory] = React.useState(false);
  const [categories, setCategories] = React.useState<
    Partial<OperationCategoryWithJustCreated | null>[]
  >([]);
  const [selectedCategories, setSelectedCategories] =
    React.useState<Partial<OperationCategoryWithJustCreated | null>>(null);

  // Graphql
  const { data, loading, error } = useGetOperationsCategoriesQuery();
  const [createOperationCategory] = useCreateOperationCategoryMutation();
  const [deleteOperationCatgoryById] = useDeleteOperationCategoryByIdMutation();

  // Use form

  useEffect(() => {
    if (data && data.operationCategories) {
      setCategories(data.operationCategories!.nodes!);
    }
  }, [data]);

  function addCategory(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (e.currentTarget.value === "") return;
      if (
        categories.find((category) => category!.name === e.currentTarget.value)
      ) {
        setSelectedCategories(
          categories.find(
            (category) => category!.name === e.currentTarget.value
          )!
        );
        console.log(props.updateOperation);
        props.updateOperation({
          id: props.operationValue!.id,
        });
        return;
      }
      createOperationCategory({
        variables: {
          input: {
            operationCategory: {
              name: e.currentTarget.value,
            },
          },
        },
      }).then((res) => {
        if (res.data) {
          setIsCreateCategory(false);
          setSelectedCategories({
            ...res.data!.createOperationCategory!.operationCategory!,
            justCreated: true,
          });
          console.log(res.data!.createOperationCategory!.operationCategory!)

          props.updateOperation({
            id: res.data!.createOperationCategory!.operationCategory!.id,
          });
        }
      });
    }
  }

  function removeCategoryAsSelectedAndRemoveIfNew(
    category: Partial<OperationCategoryWithJustCreated>
  ) {
    console.log(category);
    if (category.justCreated) {
      deleteOperationCatgoryById({
        variables: {
          input: {
            id: category.id!,
          },
        },
      }).then((res) => {
        if (res.data) {
          setSelectedCategories(null);
        }
      });
    }
    if (selectedCategories?.id === category.id) {
      setSelectedCategories(null);
    }
  }

  function setCategoryAsSelected(category: Partial<OperationCategory>) {
    console.log(category);
    setSelectedCategories(category);
  }
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(40, 36, 38, 0.8)",
        },
      }}
      contentLabel="Example Modal"
      className={
        " h-3/4 rounded-xl  absolute bottom-0 w-full space-y-6 flex flex-col p-3"
      }
    >
      <div className="min-h-fit bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600  rounded-2xl p-4">
        <p className="text-white text-xl mb-3">Créer la dépense</p>
        <div className="flex items-center">
          <p className="text-xl font-semibold px-6 bg-white rounded-full p-[1px] text-blue-800 w-fit shadow-lg shadow-blue-600">
            - {props.operationValue?.amount} €
          </p>
          <p className="text-white ml-5 font-bold">Par Mathis Deconchat</p>
        </div>
        <div className="  border-white-600 border-rounded mt-5 w-full">
          {/* <p className="text-white text-xl mb-2">Catégories</p> */}
          <div className="flex flex-row w-full flex-wrap justify-start">
            {categories.map((category) => {
              return (
                category!.id === selectedCategories?.id ? '' : (
                <CategoryOperationCard
                updateOperation={props.updateOperation}
                  removeCategoryAsSelectedAndRemoveIfNew={
                    removeCategoryAsSelectedAndRemoveIfNew
                  }
                  category={category!}
                  setCategoryAsSelected={setCategoryAsSelected}
                  isSelected={false}
                />
                )
              );
              
            })}
          </div>
        </div>
        {isCreateCategory ? (
          <div className=" border-gray-200 border-2 mr-3 mb-3 mt-5 text-white py-2 text-base max-w-fit rounded-lg space-x-1 flex justify-between items-center px-3 transition-all duration-100 ease-in">
            <div className="">
              <PencilSquareIcon className="h-5 w-5 stroke-2 " />
            </div>
            <div className="ml-2">
              <input
                autoFocus
                onBlur={() => setIsCreateCategory(false)}
                onKeyDown={(key) => addCategory(key)}
                type={"text"}
                className="ml-2 text-base p-0 text-white bg-transparent h-fit w-fit  focus:ring-0 focus:border-none active:border-none active:ring-0 focus:outline-none"
              />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setIsCreateCategory(true)}
            className=" border-gray-200 border-2 mr-3 mb-3 mt-5 text-white py-2 text-base max-w-fit rounded-lg space-x-1 flex justify-between items-center px-3 transition-all duration-100 ease-in"
          >
            <div className="">
              <PlusCircleIcon className="h-5 w-5 stroke-2 " />
            </div>
            <div>
              <button>Créer une nouvelle Catégorie</button>
            </div>
          </div>
        )}
        <div className="flex flex-row w-full flex-wrap justify-start">
          {
            <CategoryOperationCard
            updateOperation={props.updateOperation}
              removeCategoryAsSelectedAndRemoveIfNew={
                removeCategoryAsSelectedAndRemoveIfNew
              }
              category={selectedCategories!}
              setCategoryAsSelected={setCategoryAsSelected}
              isSelected={true}
            />
          }
        </div>
      </div>

      <div className=" h-20 w-full bg-gray-100 rounded-2xl flex flex-row-reverse items-center px-4 space-x-4">
        <button
          className="rounded-xl w-1/2 px-4 py-2 bg-blue-800 text-white h-2/4 ml-8 inline-flex items-center justify-center"
          onClick={() => props.createOperation()}
        >
          <CheckCircleIcon className="h-6 w-6 text-white mr-2 " />
          Créer
        </button>
        <button className="rounded-xl w-1/2 px-4 py-2 border-blue-800 border-2 text-blue-800 h-2/4 inline-flex items-center justify-center" onClick={() => {
            props.deleteState()
            props.closeModal()
          }}>
          <TrashIcon className="h-6 w-6 mr-2"  /> Annuler
        </button>
      </div>
    </Modal>
  );
};

export default OperationCreationModalStep2;
