//Hooks
import { useState } from "react";

const useMultiStepForm = (steps: JSX.Element[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const previous = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
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

export default useMultiStepForm;
