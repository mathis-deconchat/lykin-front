//Libraries
import React from "react";

//Types
import { StepFormProps } from "./types/step-form-props";

const HomeForm: React.FC<StepFormProps> = ({register, errors}) => {
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
