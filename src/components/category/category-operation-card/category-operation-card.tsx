import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type MockCategory = {
  id: number;
  name: string;
};

type CategoryOperationCardProps = {
    category: MockCategory
    setCategoryAsSelected: (category: MockCategory) => void
    removeCategoryAsSelected: (category: MockCategory) => void
    isSelected: boolean;

}

const CategoryOperationCard: React.FC<CategoryOperationCardProps> = (props) => {

  const handleIfSelected = () => {
    if (props.isSelected) {
      props.removeCategoryAsSelected(props.category)
    } else {
      props.setCategoryAsSelected(props.category)
    }
  }
  return (
    <div onClick={() => handleIfSelected()} className={"mr-3 mb-3 text-white py-2 text-base max-w-fit rounded-lg space-x-1 flex justify-between items-center px-3 " + (props.isSelected ? "bg-green-900" : "bg-blue-800")}>
    <div className="">
      {
        props.isSelected ? <CheckCircleIcon className="h-5 w-5 " /> : <PlusIcon className="h-5 w-5 stroke-2 " />
      }
      
    </div>
    <div>
      <button>{props.category.name}</button>
    </div>
  </div>
  )
}

export default CategoryOperationCard