import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { meditation } from "../../utils/data"
import Image from 'next/image'
import grabLink from 'youtube-thumbnail-grabber'
import { BsPlay } from "react-icons/bs"

const SingleMeditation = () => {
  const router = useRouter()

  const categoryName = router.query.name;
  const meditationData = meditation.filter(m => m.slug === categoryName)?.[0];
  const getImage = (url) => grabLink(url, 'max')

  return (
    <Layout>
      <div className="container grid grid-cols-1 mt-10 md:grid-cols-2 justify-items-center">
        {
          meditationData?.list?.map(l => (
            <a href={l.link} key={l.id} className="w-full" target="_blank" rel="noopener noreferrer">
              <div className='relative group w-full h-[225px] xl:w-[550px] xl:h-[400px] lg:w-[450px] lg:h-[300px] md:w-[300px] md:h-[200px] sm:h-[325px]  mb-3'>
                <Image src={getImage(l.link)} width={300} height={300} alt={l.name} layout="fill" sizes='cover' className='rounded-lg' />
                <div className='absolute inset-0 flex items-center justify-center text-4xl text-red-800 transition duration-300 rounded-lg cursor-pointer bg-black/60 md:opacity-0 group-hover:opacity-100'>
                  <BsPlay />
                </div>
              </div>
              <h1 className='text-center'>{l.name}</h1>
            </a>
          ))
        }
      </div>
    </Layout>
  )
}

export default SingleMeditation