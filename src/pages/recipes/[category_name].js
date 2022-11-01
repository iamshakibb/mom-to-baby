import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { recipes as recipesData } from "../../utils/data"

const CategoryPage = () => {
  const router = useRouter()
  const pageName = router.query.category_name;
  const data = recipesData.find(d => d.category_name.replaceAll(" ", "-").toLowerCase() === pageName)
  return (
    <Layout>
      <div className='container mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center'>
        {
          data?.list?.map(m => (
            <Link key={m.id} href={`/recipes/${pageName}/${m.name.replaceAll(" ", '-').toLowerCase()}`}>
              <a className="mb-10 flex flex-col justify-center items-center">
                <div className='relative group w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[380px] sm:h-[380px] mb-3'>
                  <Image src={m.image} width={300} height={300} alt={m.name} layout="fill" className='rounded-lg' />
                </div>
                <h1 className='mb-6 text-lg w-full max-w-[400px] capitalize text-center'>{m.name}</h1>
              </a>
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default CategoryPage