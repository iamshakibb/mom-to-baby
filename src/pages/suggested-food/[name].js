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