//Libraries
import React from "react";

//components
import Step from "./step";

interface SignUpStepperProps {
  stepsNumber: number;
  currentStepIndex: number;
}

const SignUpStepper: React.FC<SignUpStepperProps> = ({
  stepsNumber,
  currentStepIndex,
}) => {
  let bubbleSteps: JSX.Element[] = [];

  for (let i = 0; i < stepsNumber; i++) {
    bubbleSteps.push(
      <Step
        key={i}
        stepNumber={i}
        nbOfSteps={stepsNumber}
        currentStepIndex={currentStepIndex}
      />
    );
  }

  return <div className="w-full flex justify-center">{bubbleSteps}</div>;
};

export default SignUpStepper;
