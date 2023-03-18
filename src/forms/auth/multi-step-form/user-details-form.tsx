//Libraries
import React from "react";

//Types
import { StepFormProps } from "./multi-step-form";

const UserDetailsForm: React.FC<StepFormProps> = ({ register, errors }) => {
  return (
    <>
      <h5 className="form-step-title">Qui êtes-vous ?</h5>
      <label className="label" htmlFor="lastName">
        Nom
      </label>
      <input
        className="register-input"
        {...register("lastName", { required: true })}
        type="text"
        placeholder="ex: Doe"
      />
      {errors.lastName && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}

      <label className="label" htmlFor="firstName">
        Prénom
      </label>
      <input
        className="register-input"
        {...register("firstName", { required: true })}
        type="text"
        placeholder="ex: John"
      />
      {errors.firstName && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}
    </>
  );
};

export default UserDetailsForm;
