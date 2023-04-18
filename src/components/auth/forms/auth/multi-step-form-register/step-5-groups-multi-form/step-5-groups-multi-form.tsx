import React, { useEffect } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import Divider from "../../../../../common/divider";
import {
  GroupInfo,
  useMultiStepFormContext,
} from "../../../../../../contexts/mutli-step-fom-context";
import JoinGroupModal from "./modal-join-group/join-group-modal";
import CreateGroupModal from "./modal-create-group/create-group-modal";
import {
  CreateGroupInput,
  GroupsType,
  useCreateGroupAndAddUserMutation,
  useGetGroupsTypesQuery,
} from "../../../../../../generated/graphql-types";






const StepsGroupsMultiForm = () => {
  //Graphql
  const { data, loading, error } = useGetGroupsTypesQuery();

  // Local state
  const [selectedGroup, setSelectedGroup] =
    React.useState<Partial<GroupsType> | null>(null);

  // Context
  const { next, previous, userRegisterData, setUserRegisterData } =
    useMultiStepFormContext();

  //Modals
  const [isOpenJoinGroup, setIsOpenJoinGroup] = React.useState(false);
  const [isOpenCreateGroup, setIsOpenCreateGroup] = React.useState(false);

  useEffect(() => {
    if(selectedGroup){

      setUserRegisterData({
        ...userRegisterData,
        groupInfo: {
          ...userRegisterData.groupInfo,
          groupType: selectedGroup!.id!,
          
        },
      });
    }
  }, [selectedGroup]);

  // Utils functions
  function openModalForCreateGroup() {
    setIsOpenCreateGroup(true);
  }

  function closeModaForCreateGroup() {
    setIsOpenCreateGroup(false);
  }

  function openModalForJoinGroup() {
    setIsOpenJoinGroup(true);
  }

  function closeModaForJoinGroup() {
    setIsOpenJoinGroup(false);
  }

  // Logic functions
  function handleUpdateOfUserRegisterData(data: Partial<GroupInfo>) {
    setUserRegisterData({
      ...userRegisterData,
      groupInfo: {
        ...userRegisterData.groupInfo,
        ...data,
      },
    });
  }

  function handleGroupType(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    group: Partial<GroupsType>
  ) {
    // console.log(group);
    // e.stopPropagation();
    console.log(group)
    if(group){

      setSelectedGroup(group);
    }
    console.log(selectedGroup);
    setUserRegisterData({
      ...userRegisterData,
      groupInfo: {
        ...userRegisterData.groupInfo,
        groupType: group!.id!,
        
      },
    });
  }

  return (
    <>
      <JoinGroupModal
        handleUpdateOfUserRegisterData={handleUpdateOfUserRegisterData}
        closeModal={closeModaForJoinGroup}
        isOpened={isOpenJoinGroup}
        next={next}
      ></JoinGroupModal>
      <CreateGroupModal
        userRegisterData={userRegisterData}
        handleUpdateOfUserRegisterData={handleUpdateOfUserRegisterData}
        closeModal={closeModaForCreateGroup}
        isOpened={isOpenCreateGroup}
        next={next}
      ></CreateGroupModal>
      <div className=" w-full h-full " >
        <p className="text-gray-400 text-lg mt-3"> Créer un groupe </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 flex-wrap mt-2">
          {!loading && data && data.groupsTypes
            ? data.groupsTypes.nodes.map((group) => (
                <div
                  className={
                    `bg-${group!.color}-600 p-2 rounded-xl` +
                    (selectedGroup && selectedGroup.id != group!.id
                      ? " opacity-70 "
                      : "")
                  }
                  key={group!.id}
                  onClick={(e) => handleGroupType(e, group!)}
                >
                  <p className="text-xl text-white inline-flex items-center ">
                    <FolderPlusIcon className="h-5 w-5 mr-2" /> {group!.name}
                  </p>
                  <p className="text-sm text-gray-300">{group!.description}</p>
                </div>
              ))
            : ""}
        </div>
        <div className="w-full mt-16">
          <Divider
            lightColor="bg-gray-300"
            darkColor="dark:bg-gray-700"
            text="ou"
            lightBgColor="bg-white"
            darkBgColor="dark:bg-gray-800"
            lightTextColor="text-gray-500"
            darkTextColor="dark:text-white"
          />
          <button
            className="border-gray-300 border-[1px] p-3 px-2 w-full mt-6 text-lg rounded-lg text-black"
            onClick={() => openModalForJoinGroup()}
          >
            Rejoindre un groupe
          </button>
        </div>

        <div className="w-full mt-32">
          <button
            className="bg-black p-3 px-2 w-full text-lg rounded-lg text-white disabled:bg-gray-300 disabled:text-gray-500"
            onClick={() => openModalForCreateGroup()}
            disabled={!selectedGroup}
          >
            Continuer
          </button>
        </div>
      </div>
    </>
  );
};

export default StepsGroupsMultiForm;
