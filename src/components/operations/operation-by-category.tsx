import React from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";

const OperationByCategorie = () => {
  return (
    <div className="border-gray-400 border-2 border-opacity-20 rounded-xl  p-2 mt-2 mb-3">
      <div className="flex justify-between items-center align-middle mt-1 w-36">
        <div className="rounded-full text-xs bg-blue-600 text-white p-1 px-3">
          <p>Courses</p>
        </div>

        <div className="flex flex-col justify-start ">
          <Bars2Icon className="h-4 w-4 text-gray-500" />
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div>
          <p className="text-sm text-opacity-60 text-gray-700">Alimentaire</p>

        </div>
        <div>
          <p className="text-lg font-bold">€ 83.60</p>
        </div>

      </div>
    </div>
  );
};

export default OperationByCategorie;
