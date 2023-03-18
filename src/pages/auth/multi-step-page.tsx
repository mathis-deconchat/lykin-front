//Libraries
import React from "react";

//Form
import MultiStepForm from "../../forms/auth/multi-step-form/multi-step-form";

interface MultiStepPageProps {}

const MultiStepPage: React.FC<MultiStepPageProps> = () => {
  return (
    <div className="h-screen px-8 pt-10 flex flex-col items-center justify-center relative">
      <h2 className="absolute top-16 left-1/2 -translate-x-1/2 text-3xl">LYKIN</h2>
      <MultiStepForm />
    </div>
  );
};

export default MultiStepPage;
