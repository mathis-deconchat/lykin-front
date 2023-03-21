//Libraries
import clsx from "clsx";
import React, { useEffect, Suspense } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

//Hooks
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { multiStepFormRegisterInputsSchema } from "../types/step-form-props";
import { useMultiStepFormContext } from "../../../../../../contexts/mutli-step-fom-context";
import {
  MultiStepRegisterPageSchema,
  multiStepRegisterPageSchema,
} from "./types/schema";
import { useAuth } from "../../../../../../hooks/auth/use-auth-hook";
import { argsToArgsConfig } from "graphql/type/definition";

// A factoriser
const strongPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|(.{15})"
);
const mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|(.{12})"
);

const RegisterForm = () => {
  // Form management
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<MultiStepRegisterPageSchema>({
    resolver: zodResolver(multiStepRegisterPageSchema),
  });

  // Auth management
  const { isLoading } = useAuth();
  const auth = useAuth();

  // Access to context
  const { next, isLastStep, userRegisterData, setUserRegisterData } =
    useMultiStepFormContext();

  // State management
  const [displayPasswordStrength, setDisplayPasswordStrength] =
    React.useState(false);
  const [passwordStrength, setPasswordStrength] = React.useState(0);

  const [emailErors, setEmailErrors] = React.useState(false);

  // Effects
  useEffect(() => {
    if (userRegisterData.email) {
      setValue("email", userRegisterData.email);
    }
  }, [userRegisterData]);

  /// Utils functions to refactor
  const onDisplayPasswordStrength = (e: any) => {
    if (e.target.value.length > 0) {
      setDisplayPasswordStrength(true);
    } else {
      setDisplayPasswordStrength(false);
    }
  };

  const onPasswordChangeCheck = (e: any) => {
    onDisplayPasswordStrength(e);
    if (strongPassword.test(e.target.value)) {
      setPasswordStrength(3);
    } else if (mediumPassword.test(e.target.value)) {
      setPasswordStrength(2);
    } else {
      setPasswordStrength(1);
    }
  };

  // Form submit
  const onSubmit: SubmitHandler<MultiStepRegisterPageSchema> = async (data) => {
    if (data) {
      setUserRegisterData({
        ...userRegisterData,
        email: data.email,
      });
      if (data.email && data.password) {
        let result = await auth.signUp(data.email, data.email, data.password);
        if (result) {
          if (result.success) {
            if (!isLastStep) next();
          } else if (result.success == false) {
            setEmailErrors(true);
          }
        }
      }
    }
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={"register-input "}
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            onChange={() => setEmailErrors(false)}
          />
          {errors.email ? (
            <span className="text-sm text-red-600 ml-3 mt-2">
              {errors.email.message?.toString()}
            </span>
          ) : (
            ""
          )}
          {emailErors ? (
            <span className="text-xs text-red-600 ml-3 mt-2">
              Impossible de créer un compte avec ce mail
            </span>
          ) : (
            ""
          )}

          <div>
            <input
              className="register-input"
              {...register("password", { required: true })}
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => onPasswordChangeCheck(e)}
            />
            {errors.password ? (
              <span className="text-sm text-red-600 ml-3">
                {errors.password.message?.toString()}
              </span>
            ) : (
              ""
            )}

            {displayPasswordStrength ? (
              <div className="flex space-x-2 mt-3 mx-3">
                <div
                  className={clsx("border-b-4 h-1 w-full", {
                    "border-red-500":
                      passwordStrength === 1 ||
                      passwordStrength === 2 ||
                      passwordStrength === 3,
                    "border-gray-300": passwordStrength === 0,
                  })}
                ></div>
                <div
                  className={clsx("border-b-4 h-1 w-full", {
                    "border-yellow-500":
                      passwordStrength === 2 || passwordStrength === 3,
                    "border-gray-300": passwordStrength === 0,
                  })}
                ></div>
                <div
                  className={clsx("border-b-4 h-1 w-full", {
                    "border-green-500": passwordStrength === 3,
                    "border-gray-300": passwordStrength === 0,
                  })}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>

          <input
            className="register-input"
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="Confirmer mot de passe"
          />

          {errors.confirmPassword ? (
            <p className="text-sm text-red-600 ml-3">
              {errors.confirmPassword?.message?.toString()}
            </p>
          ) : (
            ""
          )}

          <div className="mt-3 flex">
            <div className="flex items-center">
              <input
                {...register("terms", { required: true })}
                type="checkbox"
                id="terms"
                aria-describedby="helper-checkbox-terms"
                className="bg-gray-100 w-4 h-4 border-gray-600 border-[1px] text-gray-600 rounded focus:ring-0 active:bg-transparent focus:bg-transparent checked:text-grey-100 "
              />
            </div>
            <div className="ml-2 mt-3 text-sm text-gray-800">
              <label htmlFor="terms" className="ml-2 text-sm">
                Veuillez accepter les conditions d'utilisation
              </label>
              <p
                id="helper-checkbox-terms"
                className="text-xs ml-2 text-gray-600 underline"
              >
                Conditions d'utilisation générales
              </p>
            </div>
          </div>
          {errors.terms ? (
            <p className="text-sm text-red-600 ml-3">
              {errors.terms?.message?.toString()}
            </p>
          ) : (
            ""
          )}

          <input
            className={
              "mt-6 bg-blue-600 py-2 w-full text-blue-100 rounded-full font-bold " 
            }
            type="submit"
            value="S'inscrire"
          />
        </form>
      </Suspense>
    </>
  );
};

export default RegisterForm;
