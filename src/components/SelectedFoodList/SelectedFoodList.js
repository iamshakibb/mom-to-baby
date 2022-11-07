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


  const removeFood = (name) => {
    const foodList = selectedFood.filter(f => f.toLowerCase() !== name.toLowerCase())
    localStorage.setItem('selected-food', JSON.stringify(foodList));
    setSelectedFood([...foodList])
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} heading="Selected Food">
      <div className='w-full h-full'>
        {
          selectedFood && selectedFood?.length === 0 ?
            <div className='flex items-center justify-center w-full h-full text-base text-gray-600'>

              <p className='flex items-center justify-center w-full'><span className='mr-4 -mt-1 text-red-700'>
                <HiOutlineExclamationCircle />
              </span>You haven&apos; t selected any food.
              </p>
            </div> :
            <ol>
              {selectedFood?.map((f, idx) => (
                <li key={idx} className="flex items-center justify-between px-3 py-4 mb-4 capitalize list-decimal bg-purple-300 rounded group">
                  <span>{f}</span>
                  <span onClick={() => removeFood(f)}>
                    <FaTimes/>
                  </span>
                </li>
              ))}
            </ol>
        }
      </div>
    </Modal>
  )
}

export default SelectedFoodList