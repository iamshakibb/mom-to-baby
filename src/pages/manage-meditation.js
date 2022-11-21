import { Listbox, Transition } from '@headlessui/react'
import { set } from 'mongoose'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { GrFormCheckmark } from 'react-icons/gr'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import Layout from '../components/Layout/Layout'
import Loading from '../components/Loading/Loading'
import Modal from '../components/Modal'
import useAuth from '../context/user.store'
import AXIOS from '../libs/clients/axiosClient'
import notify from '../utils/notificator'
import { randomId } from '../utils/randomId'
import { getImage } from './meditation/[name]'

const ManageMeditation = () => {
  const { token } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState({
    name: "",
    c_name: [meditationist[0].name],
    link: ""
  })
  const [meditation, setMeditation] = useState()
  const [rawMeditationData, setRawMeditaionData] = useState([])
  const [modalMood, setModalMood] = useState("Add Meditaion")
  const [selectedItemId, setSelectedItemId] = useState(undefined)

  const handleInputs = (e) => {
    if (e.target.name === 'name') {
      setInput(prev => ({ ...prev, name: e.target.value }))
    }

    if (e.target.name === 'link') {
      setInput(prev => ({ ...prev, link: e.target.value }))
    }
  }

  const handleSumbit = async (e, id) => {
    e.preventDefault()
    if (input.name.length > 0 && input.link.length > 0 && token && modalMood === "Add Meditaion") {
      try {
        const res = await AXIOS('/add-meditation', {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`
          },
          data: JSON.stringify({
            name: input.name,
            link: input.link,
            category_name: input.c_name
          })
        })
        setRawMeditaionData(prev => [...prev, res.data])
        notify('success', "Meditation add successfully")
        setIsOpen(false)
        setInput({
          name: "",
          c_name: [meditationist[0].name],
          link: ""
        })
        e.target.reset()
      } catch (error) {
        notify('danger', "unable to add meditation")
      }
    } else if (input.name.length > 0 && input.link.length > 0 && token && modalMood === 'Edit Meditation') {
      try {
        const res = await AXIOS(`/get-meditation/${id}`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`
          },
          data: JSON.stringify({
            name: input.name,
            link: input.link,
            category_name: input.c_name
          })
        })
        const addUpdateMeditaion = rawMeditationData.map(raw => {
          if (raw._id === id) {
            return {
              ...raw,
              name: input.name,
              link: input.link,
              category_name: input.c_name
            }
          }
          return raw
        })
        setSelectedItemId(undefined)
        setRawMeditaionData(addUpdateMeditaion)
        notify('success', "Meditation add successfully")
        setIsOpen(false)
        setInput({
          name: "",
          c_name: [meditationist[0].name],
          link: ""
        })
      } catch (error) {
        notify('danger', "unable to edit meditation")
      }
    }
  }

  useEffect(() => {
    const res = AXIOS('/get-meditation')
    res.then(res => {
      if (res.data?.length > 0) {
        setRawMeditaionData(res.data)
      }
    })
  }, [])

  useEffect(() => {
    const categorize_list = meditationist.map(list => {
      const filterData = [];
      rawMeditationData?.forEach(d => {
        if (d.category_name.includes(list.name)) {
          filterData.push(d)
        }
      })
      return {
        id: randomId(),
        name: list.name,
        list: filterData
      }
    })

    setMeditation(categorize_list)
  }, [rawMeditationData])

  const closeModal = () => {
    setIsOpen(false)
    setInput({
      name: "",
      c_name: [meditationist[0].name],
      link: ""
    })
  }

  const handleEdit = async (id) => {
    try {
      const res = await AXIOS(`get-meditation/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })
      setInput({
        name: res.data.name,
        c_name: [res.data.category_name[0]],
        link: res.data.link
      })
      setSelectedItemId(id)
      setIsOpen(true)
      setModalMood('Edit Meditation')
    } catch (error) {
      notify("danger", "Unable to perform edit")
    }
  }
  const handleDelete = async (id) => {
    try {
      const res = await AXIOS(`get-meditation/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })
      const filterRemoveItem = rawMeditationData.filter(data => data._id !== id)
      setRawMeditaionData(filterRemoveItem)
      notify('success', "Delete successfull")
    } catch (error) {
      console.log(error);
      notify('danger', "unable to delete")
    }
  }

  return (
    <Layout>
      <div className="container py-14">
        <div className='p-5 mt-5 border'>
          <h1 className='text-base'>Add new meditation</h1>
          <button
            onClick={() => {
              setIsOpen(true)
              setModalMood("Add Meditaion")
            }}
            className='h-10 mt-5 bg-[#d4f4f6] font-semibold rounded-md w-36'
          >
            Add Meditation
          </button>
        </div>

        <div>
          {
            !meditation ? <Loading /> : (
              <div className='grid grid-cols-1'>
                {
                  meditation.map(list => list?.list?.length > 0 && (
                    <div key={list.id}>
                      <h1 className='my-5 text-xl capitalize'>{list.name}</h1>
                      <div className='grid grid-cols-1 gap-14 md:grid-cols-2'>
                        {
                          list.list.map(item => (
                            <div key={item._id} className="flex space-x-4">
                              <div className='w-[200px] h-[100px] relative'>
                                <Image src={getImage(item.link)} alt={item.name} layout="fill" sizes='cover' className='rounded-lg' />
                              </div>
                              <div className='flex flex-col justify-between'>
                                <h1 className='text-base capitalize'>{item.name}</h1>
                                <div className='flex items-center space-x-6'>
                                  <div>
                                    <button onClick={() => handleEdit(item._id)} className='text-base text-blue-600'>
                                      <MdOutlineModeEditOutline />
                                    </button>
                                  </div>
                                  <div>
                                    <button onClick={() => handleDelete(item._id)} className='text-base text-red-600'>
                                      <RiDeleteBinLine />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
      <MeditationModal
        handleInputs={handleInputs}
        handleSumbit={handleSumbit}
        input={input}
        setInput={setInput}
        isOpen={isOpen}
        closeModal={closeModal}
        heading={modalMood}
        selectedItemId={selectedItemId}
      />
    </Layout>
  )
}

export default ManageMeditation

const MeditationModal = ({
  handleSumbit,
  handleInputs,
  input,
  setInput,
  isOpen,
  closeModal,
  heading,
  selectedItemId
}) => {
  return (
    <Modal isHeightAuto isOpen={isOpen} closeModal={closeModal} heading={heading}>
      <div className='flex items-center justify-center w-full h-auto'>
        <div className='max-w-[500px] w-full rounded-b-xl'>
          <form onSubmit={(e) => handleSumbit(e, selectedItemId)} className='px-2 py-10 space-y-2'>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="name" className='text-sm'>
                Name
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className="border-2 rounded-sm pl-2 h-[40px]"
                type="text"
                name="name"
                id="name"
                value={input.name}
                required
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="c_name" className='text-sm'>
                Category Name
              </label>
              <Listbox id="condition" value={input.c_name[0]} onChange={(e) => setInput(prev => ({ ...prev, c_name: [e] }))}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border-2 rounded-sm cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block capitalize truncate">{input.c_name.map((d) => d).join(', ')}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <FiChevronDown />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {meditationist.map((item, idx) => (
                        <Listbox.Option
                          key={idx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                          }
                          value={item.name}
                        >
                          <>
                            <span
                              className={`block truncate capitalize ${input.c_name.includes(item.name) ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {item.name}
                            </span>
                            {input.c_name.includes(item.name) ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <GrFormCheckmark />
                              </span>
                            ) : null}
                          </>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="link" className='text-sm'>
                Youtube Link
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className="border-2 rounded-sm pl-2 h-[40px]"
                type="text"
                name="link"
                id="link"
                value={input.link}
                required
              />
            </div>

            <div className='flex items-center justify-center w-full'>
              <button
                type='submit'
                className='h-10 mt-16 bg-[#d4f4f6] font-semibold rounded-md w-36'
              >
                {heading !== 'edit food item' ? "Add Food Item" : "Edit Food Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export const meditationist = [
  {
    id: randomId(),
    name: 'relaxation yoga',
  },
  {
    id: randomId(),
    name: 'relaxation music',
  },
  {
    id: randomId(),
    name: 'fear clearing',
  },
  {
    id: randomId(),
    name: 'mindfulness',
  }
]