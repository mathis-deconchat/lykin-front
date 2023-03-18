//Libraries
import React from "react";

//Components
import SignUpStepper from "../../../components/auth/signup-stepper/signup-stepper";

//Forms
import UserDetailsForm from "./user-details-form";
import PseudoForm from "./pseudo-form";
import HomeForm from "./home-form";
import HomeDetailsForm from "./home-details-form";

//Hooks
import { useForm } from "react-hook-form";
import useMultiStepForm from "../../../hooks/multi-step-form/use-multi-step-form";

//Types
import { SubmitHandler } from "react-hook-form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface MultiStepFormProps {}

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

const MultiStepForm: React.FC<MultiStepFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MultiStepFormInputs>();

  const { step, isLastStep, isFirstStep, previous, next, stepsNumber, currentStepIndex } =
    useMultiStepForm([
      <UserDetailsForm register={register} errors={errors} />,
      <PseudoForm register={register} errors={errors} />,
      <HomeForm register={register} errors={errors} />,
      <HomeDetailsForm register={register} errors={errors} />,
    ]);

  const onSubmit: SubmitHandler<MultiStepFormInputs> = (data) => {
    if (isLastStep) {
      console.log(data);
    } else {
      next();
    }
  };

  return (
    <>
      <SignUpStepper stepsNumber={stepsNumber} currentStepIndex={currentStepIndex} />

      <form className="w-full flex flex-col  mt-14" onSubmit={handleSubmit(onSubmit)}>
        {step}
        <div className="mt-40 flex justify-center gap-6">
          <>
            {!isFirstStep && (
              <button
                className="bg-gray-300 px-5 py-2 text-white rounded-full"
                onClick={previous}
                type="button"
              >
                Précédent
              </button>
            )}

            <button
              className="bg-blue-600 px-5 py-2 text-white rounded-full"
              type="submit"
            >
              {isLastStep ? "Valider" : "Suivant"}
            </button>
          </>
        </div>
      </form>
    </>
  );
};

export default MultiStepForm;
