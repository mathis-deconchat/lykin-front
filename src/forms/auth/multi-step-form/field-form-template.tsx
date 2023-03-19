import { useFormContext, FieldValues, RegisterOptions } from 'react-hook-form';

type InputProps = {
  type?: string;
  name: string;
  label: string;
  rules?: RegisterOptions<FieldValues>;
  placeholder?: string;
};

// const withRegister = <P extends InputProps>(
//   WrappedComponent: React.ComponentType<P>
// ) => {
//   return ({ name, label, rules, ...rest }: P) => {
//     const { register, formState: { errors } } = useFormContext();

//     return (
//       <div>
//         <label htmlFor={name}>{label}</label>
//         <WrappedComponent
//           {...rest as P}
//           {...register(name, rules)}
//         />
//         {errors[name] && (
//           <span className="input-text-error">{errors.root?.message}</span>
//         )}
//       </div>
//     );
//   };
// };

const Input = () => {return <></>}
export default Input;
