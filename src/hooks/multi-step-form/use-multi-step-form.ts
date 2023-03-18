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

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    steps: steps.length,
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    previous,
    next,
    goTo,
  };
};

export default useMultiStepForm;
