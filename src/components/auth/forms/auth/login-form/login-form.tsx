//Libraries
import React from "react";

//Hooks
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../../../../hooks/auth/use-auth-hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInputs, loginInputsSchema } from "./types/login-form-schema";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {}

interface RegisterInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  // State
  const [isLoginError, setIsLoginError] = React.useState(false);
  const auth = useAuth();
  const { isLoading } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginInputsSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    if (data) {
      let result = await auth.signIn(data.email, data.password);
      if (result) {
        if (result.success) {
          setIsLoginError(false);
          navigate("/");
        } else {
          setIsLoginError(true);
        }
      }
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="register-input"
        {...register("email", { required: true })}
        type="email"
        placeholder="ex: john.doe@yopmail.com"
      />
      {errors.email && <span>Ce champ est obligatoire</span>}

      <input
        className="register-input"
        {...register("password", { required: true })}
        type="password"
        placeholder="***********"
      />
      {errors.password && <span>Ce champ est obligatoire</span>}

      <input
        className={"mt-6  py-2 text-blue-100 rounded-full " + (isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600") }
        type="submit"
        value={isLoading ? "Chargement..." : "Se connecter"}
      />
      {isLoginError && (
        <span className="text-red-500 font-medium w-full inline-flex justify-center mt-4">Email ou mot de passe incorrrect</span>
      )}
    </form>
  );
};

export default LoginForm;
