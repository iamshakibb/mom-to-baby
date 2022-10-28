import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'

const BMI = () => {
  const [inputs, setInputs] = useState({
    beforeWeight: 0,
    afterWeight: 0,
    month: 0,
  })

  const [result, setResult] = useState(undefined)

  const handleInputs = (e) => {
    if (e.target.name === 'wbp') {
      setInputs(prev => ({
        ...prev,
        beforeWeight: Number(e.target.value)
      }))
    }

    if (e.target.name === 'wap') {
      setInputs(prev => ({
        ...prev,
        afterWeight: Number(e.target.value)
      }))
    }

    if (e.target.name === 'month') {
      setInputs(prev => ({
        ...prev,
        month: Number(e.target.value)
      }))
    }
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    if (inputs.beforeWeight && inputs.afterWeight && inputs.month) { 
      let result = inputs.afterWeight - inputs.beforeWeight;
      if (inputs.month === 1) {
        if (0.1 <= result && result <= 0.4) {
          setResult("healthy")
        } else {
          if (result < 0.1) {
            setResult('underweight')
          } else if (result > 0.4) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 2) {
        if (0.45 <= result && result <= 0.9) {
          setResult("healthy")
        } else {
          if (result < 0.45) {
            setResult('underweight')
          } else if (result > 0.9) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 3) {
        if (0.9 <= result && result <= 1.4) {
          setResult("healthy")
        } else {
          if (result < 0.9) {
            setResult('underweight')
          } else if (result > 1.4) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 4) {
        if (1.4 <= result && result <= 2.3) {
          setResult("healthy")
        } else {
          if (result < 1.4) {
            setResult('underweight')
          } else if (result > 2.3) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 5) {
        if (2.3 <= result && result <= 3.2) {
          setResult("healthy")
        } else {
          if (result < 2.3) {
            setResult('underweight')
          } else if (result > 3.2) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 6) {
        if (3.2 <= result && result <= 4.1) {
          setResult("healthy")
        } else {
          if (result < 3.2) {
            setResult('underweight')
          } else if (result > 4.1) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 7) {
        if (4.1 <= result && result <= 5.9) {
          setResult("healthy")
        } else {
          if (result < 4.1) {
            setResult('underweight')
          } else if (result > 5.9) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 8) {
        if (5.9 <= result && result <= 7.7) {
          setResult("healthy")
        } else {
          if (result < 5.9) {
            setResult('underweight')
          } else if (result > 7.7) {
            setResult('overweight')
          }
        }
      }
      if (inputs.month === 9) {
        if (7.7 <= result && result <= 9.5) {
          setResult("healthy")
        } else {
          if (result < 7.7) {
            setResult('underweight')
          } else if (result > 9.5) {
            setResult('overweight')
          }
        }
      }
    }
  }

  return (
    <Layout>
      <div className='container flex items-center justify-center w-full h-screen'>
        <div className='max-w-[500px] w-full rounded-b-xl shadow-2xl'>
          <div className='bg-[#fdcbf1] p-4 w-full text-center rounded-t-xl'>
            <h1 className='text-xl'>Weight Gain Calculator</h1>
          </div>
          {/* before pregnancy */}
          {
            !result ? (
              <form onSubmit={(e) => handleSumbit(e)} className='px-8 py-10 mt-5 space-y-4'>
                <div className='flex flex-col space-y-4'>
                  <label htmlFor="wbp" className='text-sm'>
                    Weight before pregnancy in Kg (Kilogram)
                  </label>
                  <input
                    step="0.01"
                    onChange={(e) => handleInputs(e)}
                    className="border-2 rounded-sm pl-2 h-[40px]" placeholder='Weight (KG)'
                    type="number"
                    name="wbp"
                    id="wbp"
                    required
                  />
                </div>
                {/* after pregnancy */}
                <div className='flex flex-col space-y-4'>
                  <label htmlFor="wap" className='text-sm'>
                    Weight after pregnancy in Kg (Kilogram)
                  </label>
                  <input
                    step="0.01"
                    onChange={(e) => handleInputs(e)}
                    className=" border-2 rounded-sm pl-2 h-[40px]" placeholder='Weight (KG)'
                    type="number"
                    name="wap"
                    id="wap"
                    required
                  />
                </div>
                {/* Running month */}
                <div className='flex flex-col space-y-4'>
                  <label htmlFor="month" className='text-sm'>
                    Running Month of pregnancy
                  </label>
                  <input
                    onChange={(e) => handleInputs(e)}
                    className=" border-2 rounded-sm pl-2 h-[40px]" placeholder='Month'
                    min={1}
                    max={9}
                    type="number"
                    name="month"
                    id="month"
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='h-10 mt-16 bg-[#d4f4f6] font-semibold rounded-md w-36'
                >
                  Calculate
                </button>
              </form>) : (
              <div className='px-8 py-10 text-center'>
                <p className='mb-5 text-base font-bold uppercase'>
                  {
                    result
                  }
                </p>
                {/* under weight message */}
                {
                  result === 'underweight' && <p className='text-base'>You need to gain weight</p>
                }
                {/* over weight message */}
                {
                  result === 'overweight' && <p className='text-base'>You need to loss weight</p>
                }
                <button
                  onClick={() => {
                    setResult(undefined);
                    setInputs({
                      afterWeight: 0,
                      beforeWeight: 0,
                      month: 0,
                    })
                  }}
                  className='h-10 mt-16 bg-[#d4f4f6] font-semibold rounded-md w-36'>
                  Reset
                </button>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default BMI