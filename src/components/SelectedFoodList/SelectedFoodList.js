import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { HiOutlineExclamationCircle } from "react-icons/hi"
import { foodList } from '../../utils/data'
import Image from 'next/image'
import { FaTimes } from "react-icons/fa"

const SelectedFoodList = ({ isOpen, closeModal }) => {
  const [selectedFood, setSelectedFood] = useState([])

  useEffect(() => {
    const foodItem = JSON.parse(localStorage.getItem('selected-food'))
    setSelectedFood(foodItem ? foodItem : [])
  }, [isOpen])

  const fetchSelectedFood = (foodNames) => {
    return foodList.filter(li => foodNames.includes(li.name.toLowerCase()) )
  }

  const removeFood = (name) => {
    const foodList = selectedFood.filter(f => f.toLowerCase() !== name.toLowerCase())
    localStorage.setItem('selected-food',JSON.stringify(foodList));
    setSelectedFood([...foodList])
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} heading="Selected Food">
      <div className='w-full h-full'>
        {
          selectedFood && selectedFood?.length === 0 ? <div className='flex items-center justify-center w-full h-full text-base text-gray-600'>
            
            <p className='flex items-center justify-center w-full'><span className='mr-4 -mt-1 text-red-700'>
              <HiOutlineExclamationCircle />
            </span>You haven&apos; t selected any food.
            </p>
          </div> : <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {fetchSelectedFood(selectedFood)?.map((f, idx) => (
                <div key={idx} className="group">
                  <div className='relative w-full h-[150px] mb-3'>
                    <Image className='w-full rounded-xl' src={f.image} layout="fill" alt={f.name} />
                    <div
                      onClick={() => removeFood(f.name)}
                    className='w-[20px] h-[20px] rounded-full bg-red-400 absolute right-2 top-2 flex items-center justify-center md:opacity-0 group-hover:opacity-100 transform ease-in duration-300 cursor-pointer text-[12px]'>
                      <FaTimes />
                    </div>
                  </div>
                  <p className='text-center'>{f.name}</p>
                </div>
              ))}
          </div> 
        }
      </div>
    </Modal>
  )
}

export default SelectedFoodList