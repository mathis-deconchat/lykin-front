//Libraries
import React, { useEffect, useState } from "react";
import {
  FieldErrors,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


//Form
import MultiStepForm from "../../components/auth/forms/auth/multi-step-form-register/multi-step-form";

import {  MultiStepFormRegisterInputsSchema, multiStepFormRegisterInputsSchema } from "../../components/auth/forms/auth/multi-step-form-register/types/step-form-props";
import UserDetailsForm from "../../components/auth/forms/auth/multi-step-form-register/step-3-user-details/user-details-form";
import UserVerificationCode from "../../components/auth/forms/auth/multi-step-form-register/step-2-otp/user-verification-code";
import useMultiStepForm, {
  UseMultiStepFormSteps,
} from "../../hooks/multi-step-form/use-multi-step-form";
import RegisterPage from "./register-page";
import { ProvideMutliStepForm, useMultiStepFormContext } from "../../contexts/mutli-step-fom-context";

interface MultiStepPageProps {}

const MultiStepPage: React.FC<MultiStepPageProps> = () => {
  const [x, setX] = useState(0);

  const methods = useForm<MultiStepFormRegisterInputsSchema>({
    resolver: zodResolver(multiStepFormRegisterInputsSchema),
  });



  const {
    step,
    isLastStep,
    isFirstStep,
    previous,
    next,
    stepsNumber,
    setSteps,
    currentStepIndex,
  } = useMultiStepFormContext()

  
  useEffect(() => {
    const multiStepFormSteps: UseMultiStepFormSteps[] = [
      {
        step: <RegisterPage />,
        isRegister: true,
      },
      {
        step: <UserVerificationCode x={x} />,
        stepFromHeader: {
          title: "Vérification",
          subtitle: "Vérifiez votre adresse email avec le code reçu",
          icon: "icons8-lock",
        },
        isRegister: false,
      },
      {
        step: <UserDetailsForm x={x} />,
        stepFromHeader: {
          title: "Informations personnelles",
          subtitle: "Veuillez renseigner vos informations personnelles, vous pourrez les changer par la suite dans les paramètres de l'application.",
          icon: "icons8-modifier",
        },
        isRegister: false,
      },

    ];

    setSteps(multiStepFormSteps)
  }, [])




  const onSubmit: SubmitHandler<MultiStepFormRegisterInputsSchema> = (data) => {
    if (isLastStep) {
      console.log(data);
    } else {
      setX(-1000);
      next();
    }
  };

  const onPrevious = () => {
    setX(1000);
    previous();
  };

  return (

    <div className="h-screen ">

          {step.isRegister ? (
            step.step
          ) : (
            <div className="h-screen bg-white w-full">
              <MultiStepForm
                step={step.step}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                next={next}
                previous={onPrevious}
                currentStepIndex={currentStepIndex}
                formHeader={step.stepFromHeader!}
              />
            </div>
          )}

    </div>
  );
};

export default MultiStepPage;
