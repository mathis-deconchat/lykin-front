//Libraries
import React from "react";
import { useFormContext } from "react-hook-form";

//Types
// import { StepFormProps } from "./types/step-form-props";

const HomeForm = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <h5 className="form-step-title">Saisissez un lieu :</h5>

      <input
        className="register-input"
        {...register("home", { required: true })}
        type="text"
        placeholder="ex: Maison"
      />

      {errors.home && <span className="input-text-error">Ce champ est obligatoire</span>}
    </>
  );
};

export default HomeForm;
