import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface MultiStepFormInputs {
    lastName: string;
    firstName: string;
    username: string;
    home: string;
    address: string;
    city: string;
    postalCode: string;
    test: string;
  }
export interface StepFormProps {
    register: UseFormRegister<MultiStepFormInputs>;
    errors: FieldErrors<MultiStepFormInputs>;
  }