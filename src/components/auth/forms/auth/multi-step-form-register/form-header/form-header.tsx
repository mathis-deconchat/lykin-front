import React from 'react'

import { StepFormHeader } from '../types/form-header-props'
const FormHeader: React.FC<StepFormHeader> = (props) => {
  return (
    <>
    {
      props.title && props.subtitle && props.icon ? (
        <div className="flex w-full justify-start flex-col mt-4">
        <h5 className=" font-bold text-3xl  items-center">
          {props.title}
          <img
            className="h-10 w-10 ml-3 inline-flex items-center mb-2"
            src={`src/assets/icons/${props.icon}.svg`}
          ></img>
        </h5>
        <p className="text-gray-600">{props.subtitle}</p>
    
      </div>) : ''
    }
    </>

  )
}

export default FormHeader