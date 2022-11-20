import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { FiChevronDown } from "react-icons/fi"
import { RadioGroup } from '@headlessui/react'
import { FiCheck } from "react-icons/fi"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { foodList, plans } from '../../utils/data'
import Modal from '../../components/Modal/Modal'
import { randomId } from '../../utils/randomId'
import Link from 'next/link'
import { useRouter } from 'next/router'


const SuggestedFood = () => {
  const router = useRouter()
  const [selected, setSelected] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (router && router.query.from) {
      setIsOpen(true)
    }
  }, [router])
  return (
    <Layout>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(prev => !prev)} >
        <p className='px-5 text-base'>You must select from all the categories to maintain your blood sugar levels and prevent yourself from feeling sick and lightheaded.</p>
      </Modal>
      <div className='container mt-5'>
        <div className='container grid grid-cols-1 mt-10 md:grid-cols-2 justify-items-center'>
          {
            foodlist.map(m => (
              <Link key={m.id} href={`/suggested-food/${m.slug.toLowerCase()}`}>
                <a className="flex flex-col items-center justify-center mb-10">
                  <div className='relative group w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[380px] sm:h-[380px] mb-3'>
                    <Image src={m.image} width={300} height={300} alt={m.name} layout="fill" className='rounded-lg' />
                  </div>
                  <h1 className='w-full max-w-sm mb-6 text-lg text-center capitalize'>{m.name}</h1>
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}
export default SuggestedFood

export const foodlist = [
  {
    id: randomId(),
    name: 'protein enriched',
    slug: 'protein-enriched',
    image: '/images/meat.png'
  },
  {
    id: randomId(),
    name: 'carbohydrate enriched',
    slug: 'carbohydrate-enriched',
    image: '/images/canberry_juice.png'
  },
  {
    id: randomId(),
    name: 'fat enriched',
    slug: 'fat-enriched',
    image: '/images/avocado.jpg'
  },
  {
    id: randomId(),
    name: 'vitamins and minerals enriched',
    slug: 'vitamins-and-minerals-enriched',
    image: '/images/Spinach.png'
  }
]




