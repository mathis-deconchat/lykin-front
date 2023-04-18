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

import {
  MultiStepFormRegisterInputsSchema,
  multiStepFormRegisterInputsSchema,
} from "../../components/auth/forms/auth/multi-step-form-register/types/step-form-props";
import UserDetailsForm from "../../components/auth/forms/auth/multi-step-form-register/step-4-user-details/step-4-user-details-form";
import UserVerificationCode from "../../components/auth/forms/auth/multi-step-form-register/step-3-otp/step-3-user-verification-code";
import useMultiStepForm, {
  UseMultiStepFormSteps,
} from "../../hooks/multi-step-form/use-multi-step-form";
import RegisterPage from "./register-page";
import {
  ProvideMutliStepForm,
  useMultiStepFormContext,
} from "../../contexts/mutli-step-fom-context";
import Step5Groups from "../../components/auth/forms/auth/multi-step-form-register/step-5-groups-multi-form/step-5-groups-multi-form";
import PresentationMultiForm from "../../components/auth/forms/auth/multi-step-form-register/step-1-presentation-multi-form/step-1-presentation-mutli-form";
import Step6Congratulations from "../../components/auth/forms/auth/multi-step-form-register/step-6-congratulations/step-6-congratulations";

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
  } = useMultiStepFormContext();

  useEffect(() => {
    const multiStepFormSteps: UseMultiStepFormSteps[] = [
      {
        step: <PresentationMultiForm />,
        showNav: false,
      },
      {
        step: <RegisterPage />,
        showNav: false,
      },
      {
        step: <UserVerificationCode x={x} />,
        stepFromHeader: {
          title: "Vérification",
          subtitle: "Vérifiez votre adresse email avec le code reçu",
          icon: "icons8-lock",
        },
        showNav: true,
      },
      {
        step: <UserDetailsForm x={x} />,
        stepFromHeader: {
          title: "Informations personnelles",
          subtitle:
            "Veuillez renseigner vos informations personnelles, vous pourrez les changer par la suite dans les paramètres de l'application.",
          icon: "icons8-modifier",
        },
        showNav: true,
      },
      {
        step: <Step5Groups />,
        showNav: true,
        stepFromHeader: {
          title: "Groupes",
          subtitle:
            "Veuillez choisir le type de groupe que vous voulez créer ou rejoignez un groupe existant",
          icon: "icons8-contacts",
        },
      },
      {
        step: <Step6Congratulations />,
        showNav: true,
        stepFromHeader: {
          title: "Bienvenue !",
          subtitle:
            "Votre groupe et votre comptes ont été créés avec succès, vous pouvez maintenant commencer à utiliser l'application",
          icon: "icons8-contacts",
        },
      },

    ];

    setSteps(multiStepFormSteps);
  }, []);

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
      {!step.showNav ? (
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
