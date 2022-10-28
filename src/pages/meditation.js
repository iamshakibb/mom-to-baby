import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick';
import Layout from '../components/Layout/Layout'
import { meditation } from '../utils/data'
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
      <div className='container mt-10'>
        {
          meditationData.map(m => (
            <div key={m.id} className="mb-10">
              <h1 className='mb-6 text-lg capitalize'>{m.meditation_name}</h1>

              <Slider {...settings}>
                {
                  m.list.map(l => (
                    <a href={l.link} key={l.id} target="_blank" rel="noopener noreferrer">
                      <>
                        <div className='relative group w-[125px] h-[125px] xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] mb-3'>
                          <Image src={l.image} width={300} height={300} alt={l.name} layout="fill" className='rounded-lg' />
                          <div className='absolute inset-0 flex items-center justify-center text-4xl text-red-800 transition duration-300 rounded-lg cursor-pointer bg-black/60 md:opacity-0 group-hover:opacity-100'>
                            <BsPlay />
                          </div>
                        </div>
                        <h1 className='text-sm capitalize w-[125px] lg:w-[300px] md:w-[200px]'>
                          {l.name}
                        </h1>
                      </>
                    </a>
                  ))
                }
              </Slider>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Meditation