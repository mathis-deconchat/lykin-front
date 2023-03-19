//Libraries
import React, { useState } from "react";
import {
  FieldErrors,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import HomeDetailsForm from "../../forms/auth/multi-step-form/home-details-form";
import HomeForm from "../../forms/auth/multi-step-form/home-form";

//Form
import MultiStepForm from "../../forms/auth/multi-step-form/multi-step-form";
import NavigationButtonForm from "../../forms/auth/multi-step-form/navigation-buttons-form";
import PseudoForm from "../../forms/auth/multi-step-form/pseudo-form";
import { MultiStepFormInputs } from "../../forms/auth/multi-step-form/types/step-form-props";
import UserDetailsForm from "../../forms/auth/multi-step-form/user-details-form";
import useMultiStepForm from "../../hooks/multi-step-form/use-multi-step-form";

interface MultiStepPageProps {}

const MultiStepPage: React.FC<MultiStepPageProps> = () => {
  const [x, setX] = useState(0);

  const methods = useForm<MultiStepFormInputs>();

  const {
    step,
    isLastStep,
    isFirstStep,
    previous,
    next,
    stepsNumber,
    currentStepIndex,
  } = useMultiStepForm([
    <UserDetailsForm x={x} />,
    <PseudoForm x={x} />,
    // <HomeForm register={register} errors={errors} />,
    // <HomeDetailsForm register={register} errors={errors} />,
  ]);

  const onSubmit: SubmitHandler<MultiStepFormInputs> = (data) => {
    if (isLastStep) {
      console.log(data);
    } else {
      // setX(1000);
      next();
    }
  };

  return (
    <div className="h-screen px-8 pt-10 flex flex-col items-center justify-between relative bg-white">
      <div className="h-2/6 flex items-center">
        <h2 className=" text-3xl text-blue-600">LYKIN</h2>
      </div>

      <FormProvider {...methods}>
        <form
          className="w-full h-full flex flex-col justify-between"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <MultiStepForm step={step} />
          </div>

          <NavigationButtonForm
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            next={next}
            previous={previous}
          ></NavigationButtonForm>
        </form>
      </FormProvider>
    </div>
  );
};

export default MultiStepPage;
