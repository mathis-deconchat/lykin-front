import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Operation, OperationCategory } from "../../../generated/graphql-types";

type MockCategory = {
  id: number;
  name: string;
};

type CategoryOperationCardProps = {
  category: Partial<OperationCategory>;
  isSelected: boolean;
  setCategoryAsSelected: (category: Partial<OperationCategory>) => void;
  removeCategoryAsSelectedAndRemoveIfNew: (
    category: Partial<OperationCategory>
  ) => void;
  updateOperation: (newData: Partial<OperationCategory>) => void;
};

const CategoryOperationCard: React.FC<CategoryOperationCardProps> = (props) => {
  const handleIfSelected = () => {
    props.removeCategoryAsSelectedAndRemoveIfNew(props.category!);
    if (!props.isSelected) {
      props.setCategoryAsSelected(props.category!);

      props.updateOperation(props.category!);
    }
  };
  return (
    <>
      <div
        onClick={() => handleIfSelected()}
        className={
          props.category
            ? "mr-3 mb-3 text-white py-2 text-base max-w-fit rounded-lg space-x-1 flex justify-between items-center px-3 " +
              (props.isSelected && props.category
                ? "bg-green-900"
                : "bg-blue-800")
            : "mr-3 mb-3 text-white py-2 text-base max-w-fit rounded-lg space-x-1 flex justify-between items-center px-3 bg-transparent "
        }
      >
        <div className="">
          {props.category ? (
            props.isSelected ? (
              <CheckCircleIcon className="h-5 w-5 " />
            ) : (
              <PlusIcon className="h-5 w-5 stroke-2 " />
            )
          ) : (
            ""
          )}
        </div>
        <div>
          <button>{props.category ? props.category.name : ""}</button>
        </div>
      </div>
    </>
  );
};

export default CategoryOperationCard;
