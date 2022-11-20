import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { FiChevronDown } from "react-icons/fi"
import { RadioGroup } from '@headlessui/react'
import { FiCheck } from "react-icons/fi"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { foodList, plans } from '../../utils/data'
import { randomId } from '../../utils/randomId'
import Link from 'next/link'
import AddFood from '../../components/AddFood/AddFood'
import Complication from '../../components/Complication/Complication'
import AXIOS from '../../libs/clients/axiosClient'
import notify from '../../utils/notificator'
import { useRouter } from 'next/router'


const SuggestedFood = () => {
  const router = useRouter()
  const [selected, setSelected] = useState([])
  const [foodData, setFoodData] = useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const complication = localStorage.getItem("complication")
    if (complication) {
      setSelected(JSON.parse(complication))
    }
  }, [])

  useEffect(() => {
    const foodList = [];
    foodData?.forEach(list => {
      if (selected.includes(list.disease.toLocaleString())) {
        foodList.unshift(list)
      } else {
        foodList.push(list)
      }
    })
    setFoodData([...foodList])
  }, [selected])

  const handleOption = (e) => {
    if (selected.includes(e)) {
      setSelected((prev) => [...prev.filter(p => p !== e)])
      localStorage.setItem("complication", JSON.stringify([...selected.filter(p => p !== e)]))
    } else {
      setSelected((prev) => [...prev, e])
      localStorage.setItem("complication", JSON.stringify([...selected, e.toLowerCase()]))
    }
  }

  useEffect(() => {
    if (router && router.query.name) {
      fetchFoodData().then(res => {
        const data = res.filter(d => d.category_name.includes(router.query.name.replaceAll('-', ' ').toLowerCase()))
        setFoodData(data);
      });
    }
  }, [router])

  const handleSelectFood = (name) => {
    const selectedFood = JSON.parse(localStorage.getItem('selected-food')) || []
    if (!selectedFood.includes(name)) {
      selectedFood.push(name)
    }
    localStorage.setItem("selected-food", JSON.stringify(selectedFood))
  }

  
  return (
    <Layout>
      <div className='container mt-5'>
        {/* <AddFood handleSelectFood={handleSelectFood} /> */}
        <Complication selected={selected} handleOption={handleOption} />
        <div >
          {
            foodData ? (
              <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mt-14'>
                {
                  foodData?.map((l, idx) => (
                    <div key={idx} className="cursor-pointer" onClick={() => handleSelectFood(l.name.toLowerCase())}>
                      <Image src={l.image} className="mb-4 rounded-lg" alt={l.name} width={500} height={300} />
                      <h1 className='text-base'>{l.name}</h1>
                    </div>
                  ))
                }
              </div>

            ) : (
              <div role="status" className='flex items-center justify-center w-full mt-32'>
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}
export default SuggestedFood






const fetchFoodData = async () => {
  try {
    const res = await AXIOS('/get-foodlist')
    return res.data
  } catch (error) {
    notify('danger', 'Unable to fetch food data')
  }
}