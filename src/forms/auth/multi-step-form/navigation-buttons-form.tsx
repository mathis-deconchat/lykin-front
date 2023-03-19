import React from 'react'

type NavigationButtonFormProps = {
    isFirstStep: boolean,
    isLastStep: boolean,
    previous: () => void
    next: () => void
}
const NavigationButtonForm: React.FC<NavigationButtonFormProps> = (props) => {
  return (
    <div className="h-1/4 p-2 items-center flex justify-center gap-6">
    <>
      {!props.isFirstStep && (
        <button
          className="bg-gray-300 px-5 py-2 text-white rounded-full"
          onClick={props.previous}
          type="button"
        >
          Précédent
        </button>
      )}

      <button
        className="bg-blue-600 px-5 py-2 text-white rounded-full"
        type="submit"
      >
        {props.isLastStep ? "Valider" : "Suivant"}
      </button>
    </>
  </div>
  )
}

export default NavigationButtonForm