import React from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { OperationCategory } from "../../generated/graphql-types";

type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
};

type OperationByCategorieProps = {
  category: Subset<OperationCategory> | null;
  key: number;
};

const OperationByCategory: React.FC<OperationByCategorieProps> = (props) => {
  return (
    <>
      {(props.category && props.category!.operationsByCategoryId!.nodes![0]) ? (
        <div className="border-gray-400 border-2 border-opacity-20 rounded-xl  p-2 mt-2 mb-3">
          <div className="flex justify-between items-center align-middle mt-1 w-36">
            <div className="rounded-full text-xs bg-blue-600 text-white p-1 px-3">
              <p>{props.category?.name}</p>
            </div>

            <div className="flex flex-col justify-start ">
              <Bars2Icon className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <div></div>
            <div>
              <p className="text-lg font-bold">
                {props.category?.operationsByCategoryId?.nodes!.reduce(
                  (e, c) => e + (+c!.amount! || 0),
                  0
                ) + " €"}
              </p>
            </div>
          </div>
        </div>
      ) : ''}
    </>
  );
};

export default OperationByCategory;
