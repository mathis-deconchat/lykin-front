//Libraries
import React, { SetStateAction, useEffect } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import OtpInput from "./otp-input";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../../../../../hooks/auth/use-auth-hook";
import { useMultiStepFormContext } from "../../../../../../contexts/mutli-step-fom-context";


type Props = {
  x: number;
};
const UserVerificationCode: React.FC<Props> = (props) => {
  const [keyPadValue, setKeyPadValue] = React.useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<any>();

  // States
  const [otp, setOtp] = React.useState("");
  const onChange = (otp: string) => setOtp(otp);
  const [otpErrors, setOtpErrors] = React.useState<boolean>(false);

  // Auth management
  const auth = useAuth();

  // Context
  const { next, userRegisterData, setUserRegisterData, isLastStep } =
    useMultiStepFormContext();

  // Utils functions
  const keyPadKeys = [
    { key: "1", value: 1 },
    { key: "2", value: 2 },
    { key: "3", value: 3 },
    { key: "4", value: 4 },
    { key: "5", value: 5 },
    { key: "6", value: 6 },
    { key: "7", value: 7 },
    { key: "8", value: 8 },
    { key: "9", value: 9 },
    { key: ".", value: "." },
    { key: "0", value: 0 },
    { key: <BackspaceIcon className="h-6 w-6" />, value: "backspace" },
  ];

  const onKeyPadClick = (key: string | number, e: any) => {
    e.preventDefault();
    if (key === "backspace") {
      setKeyPadValue(keyPadValue.toString().slice(0, -1));
      setValue("verification-code", keyPadValue.toString().slice(0, -1));
      setOtp(keyPadValue.toString().slice(0, -1));
    } else {
      if (
        keyPadValue.split(".").length > 1 &&
        keyPadValue.split(".")[1].length >= 2
      ) {
        return;
      }
      const newValue = keyPadValue + key;
      console.log("New value: ", newValue);
      setKeyPadValue(newValue);
      setValue("verification-code", newValue);
      setOtp(newValue);
    }
  };

  // onSubmit
  const onSubmit: SubmitHandler<any> =  async (data: any) => {
    console.log(data)
      if(data){
        if(userRegisterData.email){
          const result = await auth.confirmSignUp(userRegisterData.email, otp);
          if(result.success){
            console.log("Success: ", result.message);
            setUserRegisterData({
              ...userRegisterData,
              confirmed: true,
            });
            next();
            setOtpErrors(false);
          }
          else {
            setOtpErrors(true);
            console.log("Error: ", result.message);
          }
        }
      }
  };

  useEffect(() => {
    setOtp('');
  }, [otpErrors]);




  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <div

        className="flex flex-col justify-between items-center w-full h-full bg-white"
      >

        <div className="h-1/4 w-full p-5  justify-center flex flex-col space-y-2 items-center">
        <OtpInput onChange={onChange} valueLength={6} value={otp}></OtpInput>
        {
          otpErrors && <p className="text-red-500 text-sm">Erreur avec le code fournit</p>
        }
        </div>
        <div className="mb-6 w-full flex flex-col justify-center items-center">

        <button className="bg-blue-500 text-white w-3/4 h-10 rounded-xl text-xl font-bold">Valider</button>

        <a onClick={() => auth.resendConfirmationCode(userRegisterData.email)} className="text-gray-600 text-sm mt-5">Renvoyer le code</a>
        </div>
        <div className="bg-white w-full h-2/4 text-2xl text-gray-600 rounded-xl grid gap-x-10 px-8 gap-y-5 grid-cols-3  p-2	grid-rows-4 ">
          {keyPadKeys.map((key) => {
            return (
              <div
                onClick={(e) => onKeyPadClick(key.value, e)}
                onKeyDown={(e) => {
                  onKeyPadClick(key.value, e);
                }}
                className="text-center justify-center items-center w-full flex h-full border-b-[1px] border-gray-300 active:bg-gray-100 transition duration-75 active:scale-90 ease-in-out p-2 rounded-t-xl "
              >
                <a type="button" className="select-none">
                  <span>{key.key}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      </form>
    </>
  );
};

export default UserVerificationCode;
