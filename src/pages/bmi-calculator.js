import { Listbox, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { MdKeyboardArrowRight } from "react-icons/md"
const conditions = [
  { name: 'inactive?(get minimal exercise)' },
  { name: 'moderately active? (workout 3-4 times a week)' },
  { name: 'very much active?( workout 5-7 times a week)' },
]
const BMI = () => {
  const [inputs, setInputs] = useState({
    beforeWeight: 0,
    afterWeight: 0,
    month: 0,
  })
  const [selected, setSelected] = useState(conditions[0])
  const [calorie, setCalorie] = useState(0)
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
      const convert_pound = inputs.afterWeight * 2.205;
      let result = inputs.afterWeight - inputs.beforeWeight;
      if (selected.name === 'inactive?(get minimal exercise)') {
        setCalorie(12 * 300 * convert_pound)
      } else if (selected.name === 'moderately active? (workout 3-4 times a week)') {
        setCalorie(14 * 300 * convert_pound)
      } else {
        setCalorie(16 * 300 * convert_pound)
      }
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
                <div>
                  <label htmlFor="condition">
                    Are you</label>
                  <Listbox id="condition" value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border-2 rounded-sm cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          {/* <ChevronUpDownIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          /> */}
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {conditions.map((condition, conditionIdx) => (
                            <Listbox.Option
                              key={conditionIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                }`
                              }
                              value={condition}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                      }`}
                                  >
                                    {condition.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
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

                {
                  calorie && (
                    <div>
                      <p className='mt-1'>Your daily required calorie : {calorie}</p>
                        <Link href='/suggested-food?from=calculator'>
                        <a className='flex items-center justify-center mt-4 font-bold'>
                          Go get Food Suggestion
                          <span>
                            <MdKeyboardArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  )
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