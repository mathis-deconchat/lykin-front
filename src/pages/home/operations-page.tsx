import React, { lazy, Suspense, useEffect } from "react";
import OperationCreationModalStep2 from "../../components/operations/operation-creation-modal-step-2/operation-creation-modal-step-2";

const OperationCreationModalStep1 = lazy(
  () =>
    import(
      "../../components/operations/operation-creation-modal-step-1/operation-creation-modal-step-1"
    )
);
const OperationByCategorie = lazy(
  () => import("../../components/operations/operation-by-category")
);
const OperationDetailsModal = lazy(
  () => import("../../components/operations/operation-details/operation-details-modal")
);
const OperationListItems = lazy(
  () => import("../../components/operations/operation-list-items")
);

import Lottie from "lottie-react";
import loadingAnimation from "../../assets/98288-loading.json";
import { useModalContext } from "../../contexts/modal-context";
import {
  CreateOperationInput,
  Operation,
  OperationCategory,
  useCreateOperationMutation,
  useGetAllOperationsForHomePageQuery,
} from "../../generated/graphql-types";
import apolloClient from "../../shared/apollo/apollo.provider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const OperationPage = () => {
  const [operation, setOperation] = React.useState<Partial<Operation | null>>(null);
  const [modalIsOpenOperationDetail, setIsOpenModalOperationDetails] =
    React.useState(false);

  const [selectedOperation, setSelectedOperation] = React.useState<number | null>(null);

  const [createOperationGl] = useCreateOperationMutation();
  const { data, loading, error } = useGetAllOperationsForHomePageQuery();

  function updateOperation(newData: Partial<Operation | OperationCategory>) {
    console.log(newData);
    setOperation({
      ...operation,
      category: newData as OperationCategory,
    });
  }

  const modal = useModalContext();

  // OperationDetailModal
  function openOperationDetailModal() {
    setIsOpenModalOperationDetails(true);
  }

  function closeOperationDetailModal() {
    setIsOpenModalOperationDetails(false);
  }

  function validateFirstStep() {
    console.log(operation);
  }

  function createOperation() {
    const operationInput: CreateOperationInput = {
      operation: {
        amount: operation!.amount!,
        categoryId: operation!.category!.id,
        description: "test",
      },
    };

    createOperationGl({
      variables: {
        input: operationInput,
      },
      onCompleted: (data) => {
        console.log(data);
        modal.closeModalIsCreationOperationStep2();
        setOperation(null);
        apolloClient.refetchQueries({ include: ["GetAllOperationsForHomePage"] });
      },
    });

    console.log(operation);
  }

  const deleteState = () => {
    setOperation(null);
  };

  return (
    <Suspense
      fallback={
        <div className="h-full w-full bg-gray-100">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      }
    >
      <div
        id="operation-page"
        className=" w-full h-full  rounded-t-3xl shadow-lg bg-gray-100 p-5"
      >
        <OperationCreationModalStep1
          validateFirstStep={validateFirstStep}
          operationValue={operation}
          setOperationValue={setOperation}
          closeModal={modal.closeModalIsCreationOperationStep1}
          modalIsOpen={modal.modalIsCreationOperationStep1}
          customStyles={customStyles}
          openModalIsCreationOperationStep2={modal.openModalIsCreationOperationStep2}
        />
        <OperationCreationModalStep2
          createOperation={createOperation}
          modalIsOpen={modal.modalIsCreationOperationStep2}
          closeModal={modal.closeModalIsCreationOperationStep2}
          operationValue={operation}
          updateOperation={updateOperation}
          deleteState={deleteState}
        />
        
        <OperationDetailsModal
          selectedOperationId={selectedOperation}
          closeModal={closeOperationDetailModal}
          customStyles={{}}
          modalIsOpen={modalIsOpenOperationDetail}
        ></OperationDetailsModal>

        <div className="bg-gray-300 rounded-full w-12 h-2 mr-auto ml-auto"></div>
        <p className="text-black text-xl font-bold">Catégories</p>

        <div className="flex overflow-x-scroll space-x-3">
          <OperationByCategorie />
          <OperationByCategorie />
          <OperationByCategorie />
        </div>
        <p className="text-black text-xl font-bold mt-3">Activités</p>
        <div className="flex flex-col space-y-4 mb-6">
          {!loading && data && data.operations && data.operations.nodes.length > 0
            ? data.operations.nodes.map((operation) =>
                operation ? (
                  <div onClick={() => setSelectedOperation(operation.id)}>
                    <OperationListItems
                      key={operation!.id}
                      operation={operation}
                      openModal={() => openOperationDetailModal()}
                    ></OperationListItems>
                  </div>
                ) : null
              )
            : "loading"}

          <div className="bg-blue-200 p-1 px-3  text-sm  rounded-full text-gray-900 flex justify-center">
            <p>Voir plus</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default OperationPage;
