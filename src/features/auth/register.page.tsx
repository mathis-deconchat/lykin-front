//Libraries
import React from "react";

//Hooks
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterProps {}

interface RegisterInputs {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC<RegisterProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2 className="mb-7 text-2xl">Inscription</h2>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="lastName">Nom</label>
        <input
          className="register-input"
          {...register("lastName", { required: true })}
          type="text"
          placeholder="ex: Doe"
        />
        {errors.lastName && <span>Ce champ est obligatoire</span>}

        <label htmlFor="firstName">Prénom</label>
        <input
          className="register-input"
          {...register("firstName", { required: true })}
          type="text"
          placeholder="ex: John"
        />
        {errors.firstName && <span>Ce champ est obligatoire</span>}

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

        <label htmlFor="confirmPassword">Confirmation de mot de passe</label>
        <input
          className="register-input"
          {...register("confirmPassword", { required: true })}
          type="password"
          placeholder="***********"
        />
        {errors.confirmPassword && <span>Ce champ est obligatoire</span>}

        <input className="mt-6 bg-blue-400 py-2 text-blue-100" type="submit" />
      </form>
    </div>
  );
};

export default Register;