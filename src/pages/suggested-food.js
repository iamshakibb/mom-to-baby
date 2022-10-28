import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { FiChevronDown } from "react-icons/fi"
import { RadioGroup } from '@headlessui/react'
import { FiCheck } from "react-icons/fi"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { foodList, plans } from '../utils/data'
import Modal from '../components/Modal/Modal'


const SuggestedFood = () => {
  const [selected, setSelected] = useState([])
  const [foodData,setFoodData] = useState(foodList)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=> {
    const complication = localStorage.getItem("complication")
    if(complication){
      setSelected(JSON.parse(complication))
    }
  }, [])

  useEffect(()=> {
    const foodList = [];
    foodData.forEach(list => {
      if(selected.includes(list.disease.toLocaleString())){
        foodList.unshift(list)
      }else{
        foodList.push(list)
      }
    })
    setFoodData([...foodList])
  }, [selected])

  const handleOption = (e) => {
    if(selected.includes(e)){
      setSelected((prev) => [...prev.filter(p => p !== e)])
      localStorage.setItem("complication", JSON.stringify([...selected.filter(p => p !== e)]))
    }else {
      setSelected((prev) => [...prev, e])
      localStorage.setItem("complication", JSON.stringify([...selected, e.toLowerCase()]))
    }
  }

  const handleSelectFood = (id) => {
    const selectedFood = JSON.parse(localStorage.getItem('selected-food')) || []
    if(!selectedFood.includes(id)){
      selectedFood.push(id)
    }
    localStorage.setItem("selected-food", JSON.stringify(selectedFood))
  }
  return (
    <Layout>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(prev => !prev)}/>
      <div className='container mt-5'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-[#fdcbf1] rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>Before the suggestion please select if you have any complication.</span>
                <FiChevronDown />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2">
                <RadioGroup value={selected} onChange={(e) => handleOption(e)}>
                  <div className="space-y-2">
                    {plans.map((plan,idx) => (
                      <RadioGroup.Option
                        key={plan.name + idx}
                        value={plan.name}
                        className={({ active, checked }) =>
                          `${active
                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                            : ''
                          }
                  ${selected.includes(plan.name) ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                          }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked, }) => (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium capitalize ${selected.includes(plan.name) ? 'text-white' : 'text-gray-900'
                                      }`}
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline text-[16px] ${selected.includes(plan.name) ? 'text-sky-100' : 'text-gray-500'
                                      }`}
                                  >
                                    <span>{plan.advice}</span>
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {selected.includes(plan.name) && (
                                <div className="text-white shrink-0">
                                  <FiCheck />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mt-14'>
          {
            foodData.map((l, idx) => (
              <div key={idx} className="cursor-pointer" onClick={()=>handleSelectFood(l.name.toLowerCase())}>
                <Image src={l.image} className="mb-4 rounded-lg" alt={l.name} width={500} height={300}/>
                <h1 className='text-base'>{l.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}
export default SuggestedFood

