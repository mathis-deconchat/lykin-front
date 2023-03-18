import React from "react";
import Modal from "react-modal";
import { BackspaceIcon, DeviceTabletIcon } from "@heroicons/react/24/outline";
import {
  NumberFormatBase,
  NumericFormat,
  useNumericFormat,
} from "react-number-format";
import { AnimatePresence, motion, transform } from "framer-motion";
import "animate.css";
import { Animated } from "react-animated-css";
import "./keypad.css";

type KeyPadModalProps = {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
  customStyles: any;
  operationValue: string;
  setOperationValue: React.Dispatch<React.SetStateAction<string>>;
  validateFirstStep: () => void;
};
const KeyPadModal: React.FC<KeyPadModalProps> = (props) => {
  let euroFormatter = new Intl.NumberFormat("fr-FR", {
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    compactDisplay: "short",
  });

  Modal.setAppElement('#root')


  const [keyPadValue, setKeyPadValue] = React.useState("");

  const keyPadKeys = [
    { key: "1", value: 1 },
    { key: "2", value: 2 },
    { key: "3", value: 3 },
    { key: "4", value: 4 },
    { key: "5", value: 5 },
    { key: "6", value: 6 },
    { key: "7", value: 7 },
    { key: "8", value: 8 },
    { key: "9", value: 9 },
    { key: ".", value: "." },
    { key: "0", value: 0 },
    { key: <BackspaceIcon className="h-6 w-6" />, value: "backspace" },
  ];

  const onValidateFirstStep = () => {
    props.validateFirstStep();
    props.closeModal()
  };

  const onKeyPadClick = (key: string | number, e: any) => {
    e.preventDefault();
    if (key === "backspace") {
      setKeyPadValue(keyPadValue.toString().slice(0, -1));
      props.setOperationValue(keyPadValue.toString().slice(0, -1));

    } else {
      if (
        keyPadValue.split(".").length > 1 &&
        keyPadValue.split(".")[1].length >= 2
      ) {
        return;
      }
      const newValue = keyPadValue + key;
      console.log("New value: ", newValue);
      setKeyPadValue(newValue);
      props.setOperationValue(newValue);
    }
  };
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(70, 70, 70, 0.5)",
        },
      }}
      contentLabel="Example Modal"
      className={
        "b h-3/4 rounded-t-xl absolute bottom-0 w-full space-y-6 flex flex-col p-3"
      }
    >
      <div className="bg-blue-600 bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 w-full h-1/4 rounded-xl flex-col">
        <button
          className="absolute text-white top-3 right-6 text-lg font-extrabold"
          onClick={(e) => props.closeModal()}
        >
          x
        </button>
        <div className="h-4/6 flex items-center justify-center">
          <div className="text-white text-4xl font-extrabold h-full flex items-center">
            <span className="mr-2">€</span>
            {+keyPadValue > 0 ? (
              euroFormatter
                .format(+keyPadValue)
                .split("")
                .map((i, e) => {
                  return <span className="falling">{i}</span>;
                })
            ) : (
              <span className="empty-number mt-2 ml-2"></span>
            )}
          </div>
        </div>
        <div className="h-2/6 flex p-2  items-end justify-end">
          <button className="px-7 py-1 text-sm bg-blue-800 text-white h-fit rounded-lg">
            Annuler
          </button>
          <button
            className="px-7 py-1 text-sm bg-blue-800 text-white h-fit rounded-lg ml-3"
            onClick={() => onValidateFirstStep()}
          >
            Envoyer
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-3/4 text-2xl text-gray-600 rounded-xl grid gap-x-10 px-8 gap-y-5 grid-cols-3  p-2	grid-rows-4 ">
        {keyPadKeys.map((key) => {
          return (
            <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300 active:bg-gray-100 transition duration-75 active:scale-90 ease-in-out p-2 rounded-t-xl ">
              <a
                type="button"
                className="select-none"
                onClick={(e) => onKeyPadClick(key.value, e)}
                onKeyDown={(e) => {
                  onKeyPadClick(key.value, e);
                }}
              >
                <span>{key.key}</span>
              </a>
            </div>
          );
        })}
        {/* <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300 active:bg-gray-100 transition duration-75 active:scale-90 ease-in-out p-2 rounded-t-xl ">
          <p>1</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>2</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>3</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>4</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>5</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>6</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>7</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>8</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300">
          <p>9</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full">
          <p>.</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full">
          <p>0</p>
        </div>
        <div className="text-center justify-center items-center w-full flex h-full">
          <BackspaceIcon className="h-6 w-6 text-gray-500" />
        </div> */}
      </div>
    </Modal>
  );
};

export default KeyPadModal;
