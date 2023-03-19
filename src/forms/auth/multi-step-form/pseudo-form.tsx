//Libraries
import React from "react";

//Types
import { StepFormProps } from "./multi-step-form";

const PseudoForm: React.FC<StepFormProps> = ({register, errors}) => {
  return (
    <>
      <h5 className="form-step-title">Choisissez un pseudo :</h5>

      <input
        className="register-input"
        {...register("username", { required: true })}
        type="text"
        placeholder="Pseudo"
      />

      {errors.username && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}
    </>
  );
};

export default PseudoForm;
