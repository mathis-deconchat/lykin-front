//Libraries
import React from "react";

//Types
import { StepFormProps } from "./multi-step-form";

const UserDetailsForm: React.FC<StepFormProps> = ({ register, errors }) => {
  return (
    <>
      <h5 className="form-step-title">Qui êtes-vous ?</h5>

      <input
        className="register-input"
        {...register("lastName", { required: true })}
        type="text"
        placeholder="Nom"
      />
      {errors.lastName && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}

      <input
        className="register-input"
        {...register("firstName", { required: true })}
        type="text"
        placeholder="Prénom"
      />
      {errors.firstName && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}
    </>
  );
};

export default UserDetailsForm;
