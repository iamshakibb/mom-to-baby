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
import Modal from "../../components/Modal"
import { FoodListWithHeading } from '../../components/FoodListWithHeading/FoodListWithHeading'
import Loading from '../../components/Loading/Loading'

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
    const filter_data = foodData?.map(category => {
      const foodList = [];
      category.items.forEach(list => {
        if (selected.includes(list.disease.toLocaleString())) {
          foodList.unshift(list)
        } else {
          foodList.push(list)
        }
      })
      return {
        ...category,
        items: foodList
      }
    })
    setFoodData(filter_data)
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
    fetchFoodData().then(res => {
      if (res?.length > 0) {
        // categorized data by food category array
        const category_data = categorize_list(res)
        setFoodData(category_data);
      }
    });
  }, [])

  const handleSelectFood = (name) => {
    const selectedFood = JSON.parse(localStorage.getItem('selected-food')) || []
    if (!selectedFood.includes(name)) {
      selectedFood.push(name)
    }
    localStorage.setItem("selected-food", JSON.stringify(selectedFood))
  }

  useEffect(() => {
    if (router && router.query.from) {
      setIsOpen(true)
    }
  }, [router])

  return (
    <Layout>
      <Modal heading={'Keep that in mind !!'} isOpen={isOpen} closeModal={() => setIsOpen(prev => !prev)} >
        <p className='px-5 text-base'>You must select from all the categories to maintain your blood sugar levels and prevent yourself from feeling sick and lightheaded.</p>
      </Modal>
      <div className='container mt-5'>
        {/* <AddFood handleSelectFood={handleSelectFood} /> */}
        <Complication selected={selected} handleOption={handleOption} />
        <div >
          {
            foodData ? (
              <div className='grid grid-cols-1 gap-3 mt-14'>
                {
                  foodData?.map((l) => (
                    <FoodListWithHeading handleSelectFood={handleSelectFood} foodData={l} key={l.id} />
                  ))
                }
              </div>
            ) : (
              <Loading />
            )
          }
        </div>
      </div>
    </Layout>
  )
}
export default SuggestedFood


export const categorize_list = (res) => {
  return ['protein enriched', 'carbohydrate enriched', 'fat enriched', 'vitamins and minerals enriched'].map(f => {
    const data = res?.filter(d => d.category_name.includes(f));
    if (data.length > 0) {
      return {
        id: randomId(),
        name: f,
        items: data
      }
    }
  })
}



export const fetchFoodData = async () => {
  try {
    const res = await AXIOS('/get-food')
    return res.data
  } catch (error) {
    notify('danger', 'Unable to fetch food data')
  }
}