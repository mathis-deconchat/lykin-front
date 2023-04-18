import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import {
  GroupInfo,
  UserRegisterData,
} from "../../../../../../../contexts/mutli-step-fom-context";
import {
  CreateGroupInput,
  useCreateGroupAndAddUserMutation,
} from "../../../../../../../generated/graphql-types";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type CreateGroupModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  next: () => void;
  handleUpdateOfUserRegisterData: (data: Partial<GroupInfo>) => void;
  userRegisterData: UserRegisterData;
};

const CreateGroupModal: React.FC<CreateGroupModalProps> = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<any>();

  const [isCopiedToClipboard, setIsCopiedToClipboard] = React.useState(false);

  const [createGroupAndAddUser, { data, loading, error }] =
    useCreateGroupAndAddUserMutation();

  useEffect(() => {
    setValue("groupName", "");
  }, [props.isOpened]);

  const onSubmit: SubmitHandler<any> = (
    createGroupData: Partial<GroupInfo>
  ) => {
    const groupInfoDataUpdate: Partial<GroupInfo> = {
      groupName: createGroupData.groupName,
      groupCreated: true,
    };
    props.handleUpdateOfUserRegisterData(groupInfoDataUpdate);
    const createGroupInput: CreateGroupInput = {
      group: {
        name: props.userRegisterData.groupInfo.groupName!,
        slugId: props.userRegisterData.groupInfo.groupName!,
        typeId: props.userRegisterData.groupInfo.groupType!,
      },
    };
    console.log(createGroupInput);
    if (data && data.createGroup?.group?.code) {
      props.next();
    } else {
      createGroupAndAddUser({
        variables: {
          input: createGroupInput,
        },
        onCompleted: (data) => {
          console.log(data);
        },
      });
    }
  };

  function copyToClipBoard() {
    if (data) {
      navigator.clipboard.writeText(data.createGroup?.group?.code!);
      setIsCopiedToClipboard(true);
    }
  }

  Modal.setAppElement("#root");

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
      className=" w-full p-3 fixed bottom-4 mb-0 rounded-xl "
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-xl  w-full bg-white shadow-xl flex flex-col p-4">
          <div className="w-full">
            <p className="text-lg text-gray-600">
              {data && data.createGroup?.group?.code
                ? "Enregistrez le code ci-dessous pour le partager avec vos amis !"
                : "Donnez un nom unique à votre groupe !"}
            </p>
          </div>
          <div className="mt-3">
            {data && data.createGroup?.group?.code ? (
              <div className="relative" onClick={() => copyToClipBoard()}>
                <p className=" text-gray-500">Le code de votre groupe est :</p>
                <p className="w-full font-mono p-3 bg-gray-100 text-center mt-2 rounded-lg inline-flex justify-center ">
                  {data.createGroup?.group?.code}{" "}
                  {isCopiedToClipboard ? (
                    <CheckCircleIcon className="h-5 w-5 right-5 absolute" />
                  ) : (
                    <ClipboardIcon className="h-5 w-5 right-5 absolute" />
                  )}
                </p>
                {isCopiedToClipboard ? (
                  <p className="text-green-500 text-sm mt-2">
                    Copié dans le presse-papier !
                  </p>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <input
                {...register("groupName", { required: true })}
                type="text"
                className="w-full rounded-lg bg-white border-gray-600 "
              />
            )}
          </div>
          <button
            type="submit"
            className={
              " rounded-lg text-white p-2 mt-12 " +
              (data?.createGroup?.group ? "bg-black" : "bg-blue-600")
            }
          >
            {data && data.createGroup?.group?.code
              ? "Continuer"
              : "Créer le groupe"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateGroupModal;
