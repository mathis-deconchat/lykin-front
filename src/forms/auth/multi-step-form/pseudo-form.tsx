//Libraries
import React from "react";

//Types
import { StepFormProps } from "./multi-step-form";

const PseudoForm: React.FC<StepFormProps> = ({register, errors}) => {
  return (
    <>
      <h5 className="form-step-title">Choisissez un pseudo :</h5>

      <label className="label" htmlFor="username">
        Pseudo
      </label>

      <input
        className="register-input"
        {...register("username", { required: true })}
        type="text"
        placeholder="ex: johndoe69"
      />

      {errors.username && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}
    </>
  );
};

export default PseudoForm;
