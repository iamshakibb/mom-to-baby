import Image from 'next/image'
import React from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md"
import { RiDeleteBinLine } from "react-icons/ri"

export const FoodListWithHeading = ({ foodData, handleSelectFood, editable, handleEdit, handleDelete }) => {
  return (
    <div key={foodData.id} className="mb-10">
      <h1 className='text-xl capitalize'>{foodData.name}</h1>
      <div className='grid grid-cols-1 gap-3 mt-8 md:grid-cols-3'>
        {
          foodData.items.map(item => (
            <div key={item._id} className="cursor-pointer" onClick={() => !editable && handleSelectFood(item.name.toLowerCase())}>
              <Image src={item.image} className="mb-4 rounded-lg" alt={item.name} width={500} height={300} />
              <div className='flex items-center justify-between'>
                <h1 className='text-base'>{item.name}</h1>
                <span>
                  {item.calorie} Kcal
                </span>
              </div>
              {
                editable && <div className='flex items-center justify-between'>
                  <div>
                    <button onClick={() => handleEdit(item._id)} className='text-base text-blue-600'>
                      <MdOutlineModeEditOutline />
                    </button>
                  </div>
                  <div>
                    <button onClick={() => handleDelete(item._id)} className='text-base text-red-600'>
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
