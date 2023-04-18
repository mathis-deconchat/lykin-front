import React from 'react'

const useOpenMainModal = () => {

    const [modalIsOpenKeyPad, setIsOpenModalKeyPad] = React.useState(false);
    const [modalIsOpenOperationDetail, setIsOpenModalOperationDetails] = React.useState(false);
    const [modalIsOpenCreateOperation, setIsOpenModalCreateOperation] = React.useState(false);

    let subtitle: any;

    // OperationDetailModal
    function openOperationDetailModal() {
        setIsOpenModalOperationDetails(true);
    }

    function closeOperationDetailModal() {
        setIsOpenModalOperationDetails(false);
    }

    // KeyPadModal
    function openModalKeyPad() {
        setIsOpenModalKeyPad(true);
    }

    function closeModalKeyPad() {
        setIsOpenModalKeyPad(false);
    }

    return {
        modalIsOpenKeyPad,
        modalIsOpenOperationDetail,
        modalIsOpenCreateOperation,
        openOperationDetailModal,
        closeOperationDetailModal,
        openModalKeyPad,
        closeModalKeyPad
    }




}

export default useOpenMainModal