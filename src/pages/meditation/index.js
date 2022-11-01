import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick';
import Layout from '../../components/Layout/Layout'
import { meditation } from '../../utils/data'
import { BsPlay } from "react-icons/bs"
import Link from 'next/link';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

const Meditation = () => {
  const [meditationData, setMeditationData] = useState(meditation)
  return (
    <Layout>
      <div className='container mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center'>
        {
          meditationData.map(m => (
            <Link key={m.id} href={`/meditation/${m.slug.toLowerCase()}`}>
              <a className="mb-10">
                <div className='relative group w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[380px] sm:h-[380px] mb-3'>
                  <Image src={m.image} width={300} height={300} alt={m.name} layout="fill" className='rounded-lg' />
                  <div className='absolute inset-0 flex items-center justify-center text-4xl text-red-800 transition duration-300 rounded-lg cursor-pointer bg-black/60 md:opacity-0 group-hover:opacity-100'>
                    <BsPlay />
                  </div>
                </div>
                <h1 className='mb-6 text-lg capitalize text-center'>{m.meditation_name}</h1>
              </a>
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default Meditation