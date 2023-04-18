import React from "react";
import { useMultiStepFormContext } from "../../../../../../contexts/mutli-step-fom-context";
import "./step-1-presentation-multi-form.css";

const Step1PresentationMultiForm = () => {
  const {next, previous} = useMultiStepFormContext()
  return (
    <>
    <div className="absolute h-full w-full bg-zigzag "></div>
    <div className="h-full bg-blue-600  w-full flex p-3 items-center flex-col justify-between z-10">
      <div className="h-1/2 flex flex-col justify-center items-center z-10">
        <img
          className="bg-transparent h-full w-full object-fit"
          src="src/assets/drawkit/Scenes/Scenes02.svg"
        ></img>
      </div>
      <div className="bottom-0 w-full  h-2/4 rounded-xl bg-white p-3 z-10">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-3">
              Bienvenue sur <span className="text-blue-600 mb-3">LYKIN</span>
            </h1>
            <p className="text-gray-500 ">
              La meilleure manière de gérer votre argent et vos tâches
              quotidiennes.<br></br> Tout ça de manière complétement {" "}
              <b>gratuite</b> et <b>libre</b>.
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="bg-green-600 p-2 text-white rounded-xl text-center">
                <p>Budget</p>
            </div>
            <div className="bg-yellow-600 p-2 text-white rounded-xl text-center">
                <p>Courses</p>
            </div>
            <div className="bg-blue-600 p-2 text-white rounded-xl text-center">
                <p>Limites</p>
            </div>
            <div className="bg-fuchsia-600 p-2 text-white rounded-xl text-center">
                <p>Tâches</p>
            </div>
            <div className="bg-pink-600 p-2 text-white rounded-xl text-center">
                <p>Finances</p>
            </div>
            <div className="bg-purple-600 p-2 text-white rounded-xl text-center">
                <p>Economie</p>
            </div>


          </div>
          <div className="justify-self-end">

          <button className="bg-black w-full text-lg rounded-xl p-1 py-3 text-white mb-8" onClick={() => next()}>
            Continuer
          </button>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Step1PresentationMultiForm;
