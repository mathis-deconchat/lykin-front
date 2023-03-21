import React, { lazy, Suspense } from "react";
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
  () =>
    import(
      "../../components/operations/operation-details/operation-details-modal"
    )
);
const OperationListItems = lazy(
  () => import("../../components/operations/operation-list-items")
);

import Lottie from "lottie-react";
import loadingAnimation from "../../assets/98288-loading.json";

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
  const [operation, setOperation] = React.useState<string>("");
  const [modalIsOpenKeyPad, setIsOpenModalKeyPad] = React.useState(false);
  const [modalIsOpenOperationDetail, setIsOpenModalOperationDetails] =
    React.useState(false);
  const [modalIsOpenCreateOperation, setIsOpenModalCreateOperation] =
    React.useState(false);

  let subtitle: any;

  // OperationDetailModal
  function openOperationDetailModal() {
    setIsOpenModalOperationDetails(true);
  }

  function afterOpenOperationDetailModal() {}

  function closeOperationDetailModal() {
    setIsOpenModalOperationDetails(false);
  }

  function validateFirstStep() {
    console.log(operation);
  }

  // KeyPadModal
  function openModalKeyPad() {
    setIsOpenModalKeyPad(true);
  }

  function afterOpenModalKeyPad() {
    subtitle.style.color = "#f00";
  }

  function closeModalKeyPad() {
    setIsOpenModalKeyPad(false);
    openModalCreateOperation();
  }

  // CreateOperationModal
  function openModalCreateOperation() {
    setIsOpenModalCreateOperation(true);
  }

  function afterOpenModalCreateOperation() {}

  function closeModalCreateOperation() {
    setIsOpenModalCreateOperation(false);
  }

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
          afterOpenModal={afterOpenModalKeyPad}
          closeModal={closeModalKeyPad}
          modalIsOpen={modalIsOpenKeyPad}
          customStyles={customStyles}
        />
        <OperationCreationModalStep2
          afterOpenModal={afterOpenModalCreateOperation}
          modalIsOpen={modalIsOpenCreateOperation}
          closeModal={closeModalCreateOperation}
          operationValue={operation}
        />

        <OperationDetailsModal
          afterOpenModal={afterOpenOperationDetailModal}
          closeModal={closeOperationDetailModal}
          customStyles={{}}
          modalIsOpen={modalIsOpenOperationDetail}
        ></OperationDetailsModal>

        <div className="bg-gray-300 rounded-full w-12 h-2 mr-auto ml-auto"></div>
        <p className="text-black text-xl font-bold">Catégories</p>
        <button className="w-16 h-6 bg-gray-200 " onClick={openModalKeyPad}>
          Modal
        </button>
        <div className="flex overflow-x-scroll space-x-3">
          <OperationByCategorie />
          <OperationByCategorie />
          <OperationByCategorie />
        </div>
        <p className="text-black text-xl font-bold mt-3">Activités</p>
        <div className="flex flex-col space-y-4 mb-6">
          <OperationListItems
            openModal={() => openOperationDetailModal()}
          ></OperationListItems>

          <div className="bg-blue-200 p-1 px-3  text-sm  rounded-full text-gray-900 flex justify-center">
            <p>Voir plus</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default OperationPage;
