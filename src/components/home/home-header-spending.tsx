import React, { Suspense } from "react";
import { useGetAmoutOfAllOperationsForMonthQuery } from "../../generated/graphql-types";


const toCurrencyFormat = (amount: string) => {
  return (+amount).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
};

const HomeHeaderSpending = () => {
  const {data, loading, error} = useGetAmoutOfAllOperationsForMonthQuery()

  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className=" justify-center flex flex-col items-center mt-6">
      <p className=" text-base text-opacity-80 font-light ">Dépenses de Mars</p>
      <p className="font-extrabold text-5xl ">- {data 
      ? data.operations?.nodes.reduce(
        (a,c) => a + (+c?.amount! || 0), 0
      ) : 0}€</p>

    
    </div>
    </Suspense>
  );
};

export default HomeHeaderSpending;
