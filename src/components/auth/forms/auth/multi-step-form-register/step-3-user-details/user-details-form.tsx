//Libraries
import React, { SetStateAction } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { multiStepRegisterUserDetailsSchema, MultiStepRegisterUserDetailsSchema } from "./types/schema";
import { useMultiStepFormContext } from "../../../../../../contexts/mutli-step-fom-context";
import { useAuth } from "../../../../../../hooks/auth/use-auth-hook";


type Props = {
  x: number;
};
const UserDetailsForm: React.FC<Props> = (props) => {

  // Auth management
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MultiStepRegisterUserDetailsSchema>({
    resolver: zodResolver(multiStepRegisterUserDetailsSchema),
  });

  const onSubmit: SubmitHandler<MultiStepRegisterUserDetailsSchema> = (data) => {
    console.log(data)
    if(data){
      setUserRegisterData({
        ...userRegisterData,
        ...data,

      })
      auth.updateUserAttributes(data)
      if(isLastStep){
        console.log('submit')
      }else{
        next()
      }
    }
  }

  // Access to context
  const { next, isLastStep, userRegisterData, setUserRegisterData } =
    useMultiStepFormContext();
  return (
    <>
      <motion.div
        initial={{ x: props.x }}
        transition={{ duration: 0.5 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        className="h-full"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="register-input"
          {...register("lastName", { required: false })}
          type="text"
          placeholder="Nom"

        />
        {errors.lastName && (
          <span className="input-text-error">Ce champ est obligatoire</span>
        )}

        <input
          className="register-input"
          {...register("firstName")}
          type="text"
          placeholder="Prénom"
        />
        {errors.firstName && (
          <span className="input-text-error">Ce champ est obligatoire</span>
        )}

        <input
          className="register-input"
          {...register("pseudo")}
          type="text"
          placeholder="Pseudo"
        />
        {errors.pseudo && (
          <span className="input-text-error">Ce champ est obligatoire</span>
        )}
        <input type="submit" value="Suivant" />
        </form>
      </motion.div>
    </>
  );
};

export default UserDetailsForm;
