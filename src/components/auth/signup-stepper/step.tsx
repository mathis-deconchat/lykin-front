//Libraries
import React from "react";

interface StepProps {
  nbOfSteps: number;
  stepNumber: number;
  currentStepIndex: number;
}

const Step: React.FC<StepProps> = ({ currentStepIndex, nbOfSteps, stepNumber }) => {
  const stepBgColor = currentStepIndex >= stepNumber ? "bg-blue-600" : "bg-gray-300";
  const stepBarBgColor =
    stepNumber + 1 > currentStepIndex
      ? "bg-gray-300 border-gray-300"
      : "bg-blue-600 border-blue-600";

  return (
    <div
      className={
        stepNumber < nbOfSteps - 1 ? "flex grow items-center" : "flex items-center"
      }
    >
      <span
        className={
          "w-8 h-8 flex justify-center items-center rounded-full text-white " +
          stepBgColor
        }
      >
        {stepNumber + 1}
      </span>

      {stepNumber < nbOfSteps - 1 && (
        <div className={"h-1 grow border " + stepBarBgColor}></div>
      )}
    </div>
  );
};

export default Step;
