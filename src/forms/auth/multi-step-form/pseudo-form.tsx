//Libraries
import React from "react";
import { useFormContext } from "react-hook-form";
import {motion} from "framer-motion";


//Types
import { StepFormProps } from "./types/step-form-props";
type Props = {
  x: number;
}

const PseudoForm: React.FC<Props> = (props) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    
    <>
          <motion.div                            
          initial={{ x: props.x }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
          className="w-full"
        >
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
      </motion.div>
    </>
  );
};

export default PseudoForm;
