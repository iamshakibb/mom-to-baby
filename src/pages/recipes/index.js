import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { recipes as recipesData } from "../../utils/data"

const index = () => {
  return (
    <Layout>
      <div className='container mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center'>
        {
          recipesData.map(m => (
            <Link key={m.id} href={`/recipes/${m.category_name.replaceAll(" ", '-').toLowerCase()}`}>
              <a className="mb-10 flex flex-col justify-center items-center">
                <div className='relative group w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[380px] sm:h-[380px] mb-3'>
                  <Image src={m.image} width={300} height={300} alt={m.category_name} layout="fill" className='rounded-lg' />
                </div>
                <h1 className='mb-6 text-lg w-full max-w-[400px] capitalize text-center'>{m.category_name}</h1>
              </a>
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default index