//Libraries
import React from "react";

//Hooks
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterFormProps {}

interface RegisterInputs {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="register-input"
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      {errors.email && <span>Ce champ est obligatoire</span>}

      <input
        className="register-input"
        {...register("password", { required: true })}
        type="password"
        placeholder="Mot de passe"
      />
      {errors.password && <span>Ce champ est obligatoire</span>}

      <input
        className="register-input"
        {...register("confirmPassword", { required: true })}
        type="password"
        placeholder="Confirmer mot de passe"
      />
      {errors.confirmPassword && <span>Ce champ est obligatoire</span>}

      <input
        className="mt-6 bg-blue-600 py-2 text-blue-100 rounded-full"
        type="submit"
        value="S'inscrire"
      />
    </form>
  );
};

export default RegisterForm;
