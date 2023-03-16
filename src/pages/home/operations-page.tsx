import React from "react";
import OperationByCategorie from "../../components/operations/operation-by-category";
import OperationListItems from "../../components/operations/operation-list-items";

const OperationPage = () => {
  return (
    <div className=" w-full  rounded-t-3xl shadow-lg bg-gray-100 p-5   mb-12">
      <div className="bg-gray-300 rounded-full w-12 h-2 mr-auto ml-auto"></div>
      <p className="text-black text-xl font-bold">Catégories</p>
      <div className="flex overflow-x-scroll space-x-3">
        <OperationByCategorie />
        <OperationByCategorie />
        <OperationByCategorie />
      </div>
      <p className="text-black text-xl font-bold mt-3">Activités</p>
      <div className="flex flex-col space-y-4 mb-6">
        <OperationListItems />
        <OperationListItems />
        <OperationListItems />
        <OperationListItems />
        <OperationListItems />
        <OperationListItems />

        <OperationListItems />

        <OperationListItems />

        <OperationListItems />

        <OperationListItems />


      <div className="bg-blue-200 p-1 px-3  text-sm  rounded-full text-gray-900 flex justify-center"><p>Voir plus</p></div>
      </div>

    </div>
  );
};

export default OperationPage;
