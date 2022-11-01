import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { recipes as recipesData } from "../../utils/data"

const Recipe = () => {
  const router = useRouter()
  const query = router.query.recipe;
  const data = query && recipesData.find(d => d.category_name.replaceAll(" ", "-").toLowerCase() === query[0])?.list.find(r => r.name.toLowerCase().replaceAll(" ", '-') === query[1])
  return (
    <Layout>
      {
        data && <div className="container py-5">
          <div className='relative w-full h-[400px] mb-10'>
            <Image src={data.image} className="rounded-lg" layout="fill" alt={data.name} width={300} height={300} />
          </div>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-lg text-center mb-5'>
              {data.name}
            </h1>
            {
              data.decription && <p className='w-full mb-5 text-base max-w-[900px]'>{data.decription}</p>
            }
            {
              data.nutrition && <div className='max-w-[900px] w-full'>
              
                <h2 className='capitalize mb-3 text-base'>nutrition</h2>
                <ul>
                  {
                    data.nutrition.map((n, idx) => (
                      <li key={idx} className="mb-2 list-disc ml-5">{n}</li>
                    ))
                  }
                </ul>
              </div>
            }
            {
              data.ingredients && <div className='max-w-[900px] w-full'>

                <h2 className='capitalize mb-3 text-base'>ingredients</h2>
                <ol>
                  {
                    data.ingredients.map((n, idx) => (
                      <li key={idx} className="mb-2 list-decimal ml-5">{n}</li>
                    ))
                  }
                </ol>
              </div>
            }
          </div>
        </div>
      }
    </Layout>
  )
}

export default Recipe