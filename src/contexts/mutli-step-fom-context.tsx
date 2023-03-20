import React, { createContext } from "react";
import { StepFormHeader } from "../components/auth/forms/auth/multi-step-form-register/types/form-header-props";

export interface UseMultiForm {
  currentStepIndex: number;
  step: UseMultiStepFormSteps;
  isFirstStep: boolean;
  isLastStep: boolean;
  userRegisterData: UserRegisterData;
  next: () => void;
  previous: () => void;
  setSteps: React.Dispatch<React.SetStateAction<UseMultiStepFormSteps[]>>;
  setUserRegisterData: React.Dispatch<React.SetStateAction<UserRegisterData>>;
  stepsNumber: number;
}

export type UseMultiStepFormSteps = {
  step: JSX.Element;
  stepFromHeader?: StepFormHeader;
  isRegister: boolean;
};

export type UserRegisterData = {
  email: string;
  password?: string;
  passwordConfirmation?: string;
  phone: string;
  home: string;
  firstName: string;
  lastName: string;
  otp: boolean;
  confirmed: boolean;
};

export const multiFormContext = createContext({} as UseMultiForm);

export const ProvideMutliStepForm = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const multistep = useMultiStepForm();
  return (
    <multiFormContext.Provider value={multistep}>
      {children}
    </multiFormContext.Provider>
  );
};

export const useMultiStepFormContext = () => {
  return React.useContext(multiFormContext);
};

export const useMultiStepForm = (): UseMultiForm => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [x, setX] = React.useState(0);

  const [userRegisterData, setUserRegisterData] =
    React.useState<UserRegisterData>({} as UserRegisterData);
  const [steps, setSteps] = React.useState<UseMultiStepFormSteps[]>([
    {
      step: <div>Loadingue</div>,
      isRegister: true,
    },
  ]);

  const step = steps[currentStepIndex];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const next = () => {
    if (isLastStep) {
      return;
    }
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const previous = () => {
    if (isFirstStep) {
      return;
    }
    setCurrentStepIndex(currentStepIndex - 1);
  };

  return {
    step,
    isFirstStep,
    isLastStep,
    userRegisterData,
    next,
    previous,
    setSteps,
    setUserRegisterData,
    currentStepIndex,
    stepsNumber: steps.length,
  };
};
