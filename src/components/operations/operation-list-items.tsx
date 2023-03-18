import React from 'react'

type OperationListItemsProps = {
  operation?: any;
  openModal: () => void;
};

const OperationListItems: React.FC<OperationListItemsProps> = (props) => {
  return (
    <div className='flex mt-1 justify-between' onClick={() => props.openModal()}>
        <div className='rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center align-middle'>
            <p className='text-lg font-bold'>M</p>

        </div>
        <div className='ml-3'>
            <p className='text-lg font-bold'>Mathis Deconchat</p>
            <p className='text-sm text-gray-600'>14h45 - Courses - Alimentaires</p>
        </div>
        <div className='ml-3'>
            <p className='mt-3  font-bold text-red-400 inline-block'>- €50.00</p>

        </div>

    </div>
  )
}

export default OperationListItems