//Libraries
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import FormHeader from "./form-header/form-header";
import NavigationButtonForm from "./navigation-buttons-form";
import { StepFormHeader } from "./types/form-header-props";

interface MultiStepFormProps {
  step: JSX.Element;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStepIndex: number;
  formHeader: StepFormHeader;
  previous: () => void;
  next: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = (props) => {
  return (
    <div className="h-full w-full flex flex-col bg-white p-3 justify-between">
      <div className="flex w-full justify-between items-center mt-6 mb-3">
        <ArrowSmallLeftIcon className="h-6 w-6 font-bold stroke-2" onClick={() => props.previous()}/>
        <button className="border-[1px] rounded-xl px-5 border-gray-300 py-2 ">Se connecter</button>
      </div>
      <FormHeader {...props.formHeader}></FormHeader>


      <div className=" w-full h-full flex items-center">{props.step}</div>
      {props.currentStepIndex > 1 ? (
        <NavigationButtonForm
          isFirstStep={props.isFirstStep}
          isLastStep={props.isLastStep}
          next={props.next}
          previous={props.previous}
        ></NavigationButtonForm>
      ) : (
        ""
      )}
    </div>
  );
};

export default MultiStepForm;
