//Libraries
import React from "react";

interface MultiStepFormProps {
  step: JSX.Element;
}


const MultiStepForm: React.FC<MultiStepFormProps> = (props) => {


  return (
    <>
      {/* <SignUpStepper stepsNumber={stepsNumber} currentStepIndex={currentStepIndex} /> */}

        {props.step}

    </>
  );
};

export default MultiStepForm;
