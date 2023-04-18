import React from "react";
import { useMultiStepFormContext } from "../../../../../contexts/mutli-step-fom-context";

const NavigationButtonForm = () => {
  const { isLastStep, isFirstStep, previous } = useMultiStepFormContext();
  return (
    <div className="h-1/4 p-2 items-center flex justify-center gap-6">
      <>
        {/* {!isFirstStep && (
          <button
            className="bg-gray-300 px-5 py-2 text-white rounded-full"
            onClick={previous}
            type="button"
          >
            Précédent
          </button>
        )} */}


      </>
    </div>
  );
};

export default NavigationButtonForm;
