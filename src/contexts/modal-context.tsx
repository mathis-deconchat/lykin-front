import React from "react";

export interface ModalContextInterface {
  modalIsCreationOperationStep1: boolean;
  modalIsCreationOperationStep2 : boolean;
  modalIsOpenOperationDetail: boolean;
  modalIsOpenCreateOperation: boolean;
  openOperationDetailModal: () => void;
  closeOperationDetailModal: () => void;
  openModalIsCreationOperationStep1: () => void;
  closeModalIsCreationOperationStep1: () => void;
  openModalIsCreationOperationStep2: () => void;
  closeModalIsCreationOperationStep2: () => void;
}

export const modalContext = React.createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export const ProvideModalContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const modal = useModal();
  return (
    <modalContext.Provider value={modal}>{children}</modalContext.Provider>
  );
};

export const useModalContext = (): ModalContextInterface => {
  return React.useContext(modalContext);
};

const useModal = () => {
  const [modalIsCreationOperationStep1, setModalIsCreationOperationStep1] = React.useState(false);
  const [modalIsCreationOperationStep2, setModalIsCreationOperationStep2] = React.useState(false);

  const [modalIsOpenOperationDetail, setIsOpenModalOperationDetails] =
    React.useState(false);
  const [modalIsOpenCreateOperation, setIsOpenModalCreateOperation] =
    React.useState(false);

  // OperationDetailModal
  function openOperationDetailModal() {
    setIsOpenModalOperationDetails(true);
  }

  function closeOperationDetailModal() {
    setIsOpenModalOperationDetails(false);
  }

  // Creation Operation step 1
  function openModalIsCreationOperationStep1() {
    setModalIsCreationOperationStep1(true);
  }

  function closeModalIsCreationOperationStep1() {
    setModalIsCreationOperationStep1(false);
  }

  // Creation Operation step 2
  function openModalIsCreationOperationStep2() {
    setModalIsCreationOperationStep2(true);
  }

  function closeModalIsCreationOperationStep2() {
    setModalIsCreationOperationStep2(false);
  }



  return {
    modalIsCreationOperationStep1,
    modalIsOpenOperationDetail,
    modalIsOpenCreateOperation,
    modalIsCreationOperationStep2,
    openOperationDetailModal,
    closeOperationDetailModal,
    openModalIsCreationOperationStep1,
    closeModalIsCreationOperationStep1,
    setModalIsCreationOperationStep1,
    openModalIsCreationOperationStep2,
    closeModalIsCreationOperationStep2,
  };
};

