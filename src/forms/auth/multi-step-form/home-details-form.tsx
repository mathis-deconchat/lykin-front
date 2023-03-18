//Libraries
import React from "react";

//Types
import { StepFormProps } from "./multi-step-form";

const HomeDetailsForm: React.FC<StepFormProps> = ({ register, errors }) => {
  return (
    <>
      <h5 className="form-step-title">
        Information complémentaires du lieu de résidence
      </h5>

      <label className="label" htmlFor="address">
        Adresse
      </label>

      <input
        className="register-input"
        {...register("address", { required: true })}
        type="text"
        placeholder="ex: 123 rue du chemin"
      />

      {errors.address && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}

      <label className="label" htmlFor="city">
        Ville
      </label>

      <input
        className="register-input"
        {...register("city", { required: true })}
        type="text"
        placeholder="ex: Toulouse"
      />

      {errors.city && <span className="input-text-error">Ce champ est obligatoire</span>}

      <label className="label" htmlFor="postalCode">
        Code Postal
      </label>

      <input
        className="register-input"
        {...register("postalCode", { required: true })}
        type="text"
        placeholder="ex: 31000"
      />

      {errors.postalCode && (
        <span className="input-text-error">Ce champ est obligatoire</span>
      )}
    </>
  );
};

export default HomeDetailsForm;
