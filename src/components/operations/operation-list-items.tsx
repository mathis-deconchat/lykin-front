import React from 'react'
import { Operation } from '../../generated/graphql-types';
import { OperationCategory } from '../../generated/graphql-types';

type Subset<K> = {
    [attr in keyof K]?: K[attr] extends object
        ? Subset<K[attr]>
        : K[attr] extends object | null
        ? Subset<K[attr]> | null
        : K[attr] extends object | null | undefined
        ? Subset<K[attr]> | null | undefined
        : K[attr];
};

type OperationListItemsProps = {
  operation: Subset<Operation>;
  openModal: () => void;
};

function convertDateToYearMonth(dateString: string) {
  // Create a new Date object from the input string
  const date = new Date(dateString);
  
  // Extract the year and month from the date object
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
  
  // Return the year and month as a string in the format "yyyy-mm"
  return `${year}-${month}`;
}

const toCurrencyFormat = (amount: string) => {
  return (+amount).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
};

const OperationListItems: React.FC<OperationListItemsProps> = (props) => {
  return (
    <div className='flex mt-1' onClick={() => props.openModal()}>
        <div className='rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center align-middle'>
            <p className='text-lg font-bold'>M</p>

        </div>
        <div className='ml-3'>
            <p className='text-lg font-bold'>Mathis Deconchat</p>
            <p className='text-sm text-gray-600'>{convertDateToYearMonth(props.operation?.createdAt) + '- ' + props.operation!.category!.name!}</p>
        </div>
        <div className='ml-auto inline-flex'>
            <p className='mt-3  font-bold text-red-400 inline-block'>- {toCurrencyFormat(props.operation!.amount!)}</p>

        </div>

    </div>
  )
}

export default OperationListItems