//Hooks
import { useState } from "react";
import { StepFormHeader } from "../../components/auth/forms/auth/multi-step-form-register/types/form-header-props";

export type UseMultiStepFormSteps = {
  step: JSX.Element;
  stepFromHeader?: StepFormHeader
  showNav: boolean;
}

const useMultiStepFormZ = (steps: UseMultiStepFormSteps[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [x, setX] = useState(0);

  const previous = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
    // setX(x + 1000);
  };

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
    // setX(x - 1000);

  };

  return {
    stepsNumber: steps.length,
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    previous,
    next,
    
  };
};

export default useMultiStepFormZ;
