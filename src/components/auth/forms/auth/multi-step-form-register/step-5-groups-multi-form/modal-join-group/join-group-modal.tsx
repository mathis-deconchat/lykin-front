import React, { Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { GroupInfo } from "../../../../../../../contexts/mutli-step-fom-context";
import { useAddUserToExistingGroupMutation } from "../../../../../../../generated/graphql-types";
import Lottie from "lottie-react";
import spinnerAnimation from "../../../../../../../assets/spinner.json";

type JoinGroupModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  next: () => void;
  handleUpdateOfUserRegisterData: (data: Partial<GroupInfo>) => void;
};
const JoinGroupModal: React.FC<JoinGroupModalProps> = (props) => {
  const [addUserToExistingGroupMutation, { data, loading, error }] =
    useAddUserToExistingGroupMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Partial<GroupInfo>>();

  useEffect(() => {
    setValue("groupName", "");
  }, [props.isOpened]);

  const onSubmit = (data: Partial<GroupInfo>) => {
    console.log(data);
    const groupInfoDataUpdate: Partial<GroupInfo> = {
      groupJoined: true,
      groupCode: data.groupCode,
      groupJoinStatus: "pending",
    };
    props.handleUpdateOfUserRegisterData(groupInfoDataUpdate);

    addUserToExistingGroupMutation({
      variables: {
        input: {
          _inputCode: data.groupCode,
        },
      },
      onCompleted: (data) => {
        if (data.addUserToGroup?.group?.name) {
          props.closeModal();
          props.next();
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <Modal
      isOpen={props.isOpened}
      onRequestClose={props.closeModal}
      contentLabel="Join Group Modal"
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(40, 36, 38, 0.8)",
        },
      }}
      className="h-1/3 w-full p-3 absolute bottom-0 rounded-xl "
    >
      <Suspense fallback={<Lottie animationData={spinnerAnimation} />}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-xl h-full w-full bg-white shadow-xl flex flex-col p-4">
            <div className="w-full h-1/4">
              <p className="text-lg text-gray-600">
                Renseignez le code unique du groupe que vous souhaitez rejoindre{" "}
              </p>
            </div>
            <div className="mt-6">
              <input
                {...register("groupCode", { required: true })}
                type="text"
                className="w-full rounded-lg  border-gray-600 font-mono text-center bg-gray-100 "
              />
              {loading ? <Lottie animationData={spinnerAnimation} /> : ""}
              {error ? (
                <p className="text-red-500 text-center mt-4">
                  Une erreur est survenue, veuillez réessayer
                </p>
              ) : (
                ""
              )}
              {!error &&
              !loading &&
              data &&
              data.addUserToGroup?.group?.name ? (
                <p className="text-green-500 text-center mt-4">
                  Vous avez rejoint le groupe {data.addUserToGroup?.group?.name}
                </p>
              ) : (
                ""
              )}
            </div>
            {data && data.addUserToGroup?.group?.name ? (
              <button
                type="submit"
                className="bg-blue-500 rounded-lg text-white p-2 mt-12"
                onClick={props.next}
              >
                Continuer
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 rounded-lg text-white p-2 mt-12"
              >
                Rejoindre le groupe
              </button>
            )}
          </div>
        </form>
      </Suspense>
    </Modal>
  );
};

export default JoinGroupModal;
