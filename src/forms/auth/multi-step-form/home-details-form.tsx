//Libraries
import React from "react";

//Types
import { StepFormProps } from "./types/step-form-props";

const HomeDetailsForm: React.FC<StepFormProps> = ({ register, errors }) => {
  return (
    <>
      <h5 className="form-step-title">
        Informations du lieu de résidence
      </h5>

      <input
        className="register-input"
        {...register("address", { required: true })}
        type="text"
        placeholder="Adresse"
      />

      {errors.address && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}

      <input
        className="register-input"
        {...register("city", { required: true })}
        type="text"
        placeholder="Ville"
      />

      {errors.city && <span className="input-text-error">Ce champ est obligatoire</span>}

      <input
        className="register-input"
        {...register("postalCode", { required: true })}
        type="text"
        placeholder="Code postal"
      />

      {errors.postalCode && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}
    </>
  );
};

export default HomeDetailsForm;
