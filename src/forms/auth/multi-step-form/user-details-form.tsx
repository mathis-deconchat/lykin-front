//Libraries
import React, { SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import {motion} from "framer-motion";

//Types
import { StepFormProps } from "./types/step-form-props";
type Props = {
  x: number;
  // setX: React.Dispatch<SetStateAction<number>>
}
const UserDetailsForm: React.FC<Props> = (props) => {

  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <motion.div                            
          initial={{ x: props.x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
          className="w-full"
        >
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
      </motion.div>
    </>
  );
};

export default UserDetailsForm;
