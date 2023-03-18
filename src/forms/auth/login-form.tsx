//Libraries
import React from "react";

//Hooks
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormProps {}

interface RegisterInputs {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
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
      <label htmlFor="email">E-mail</label>
      <input
        className="register-input"
        {...register("email", { required: true })}
        type="email"
        placeholder="ex: john.doe@yopmail.com"
      />
      {errors.email && <span>Ce champ est obligatoire</span>}

      <label htmlFor="password">Mot de passe</label>
      <input
        className="register-input"
        {...register("password", { required: true })}
        type="password"
        placeholder="***********"
      />
      {errors.password && <span>Ce champ est obligatoire</span>}

      <input
        className="mt-6 bg-blue-400 py-2 text-blue-100"
        type="submit"
        value="Se connecter"
      />
    </form>
  );
};

export default LoginForm;
