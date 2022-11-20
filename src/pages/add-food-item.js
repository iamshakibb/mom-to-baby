import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { FilePond, File, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import AXIOS from '../libs/clients/axiosClient'
import useAuth from '../context/user.store'
import { Listbox, Transition } from '@headlessui/react'
import { foodlist } from './suggested-food'
import { FiChevronDown } from 'react-icons/fi'
import { plans } from '../utils/data'
import { GrFormCheckmark } from "react-icons/gr"
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const AddFoodItem = () => {
  const { token } = useAuth()
  const [files, setFiles] = useState([])
  const [input, setInput] = useState({
    name: "",
    c_name: [foodlist[0].name],
    disease: [plans[0].name],
    calorie: null,
    image: ''
  })


  useEffect(() => {
    let fileReader, isCancel = false;
    if (files.length > 0) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0].file);
      fileReader.onloadend = () => {
        if (fileReader.result && !isCancel) {
          setInput(prev => ({ ...prev, image: fileReader.result }));
        }
      };
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }
  }, [files])

  const handleInputs = e => {
    if (e.target.name === 'name') {
      setInput(prev => ({ ...prev, name: e.target.value }));
    }
    if (e.target.name === 'c_name') {
      setInput(prev => ({ ...prev, c_name: [e.target.value] }));
    }
    if (e.target.name === 'disease') {
      setInput(prev => ({ ...prev, disease: [e.target.value] }));
    }
    if (e.target.name === 'calorie') {
      setInput(prev => ({ ...prev, calorie: [e.target.value] }));
    }
  }

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (input.c_name && input.calorie && input.disease && input.name && input.image && token) {
      try {
        const res = await AXIOS('/add-fooditem', {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`
          },
          data: JSON.stringify({
            name: input.name,
            image: input.image,
            category_name: input.c_name,
            disease: input.disease,
            calorie: Number(input.calorie)
          })
        })
        e.target.reset()
        setInput({
          name: "",
          c_name: [foodlist[0].name],
          disease: [plans[0].name],
          calorie: null,
          image: ''
        })
        setFiles([])
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Layout>
      <div className='container flex items-center justify-center w-full min-h-screen'>
        <div className='max-w-[500px] w-full rounded-b-xl shadow-2xl'>
          <div className='bg-[#fdcbf1] p-4 w-full text-center rounded-t-xl'>
            <h1 className='text-xl'>Add Food Item</h1>
          </div>

          <form onSubmit={(e) => handleSumbit(e)} className='px-8 py-10 space-y-4'>
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
                required
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="c_name" className='text-sm'>
                Category Name
              </label>
              <Listbox id="condition" value={input.c_name[0]} onChange={(e) => setInput(prev => ({ ...prev, c_name: prev.c_name.includes(e) ? [...prev.c_name.filter(n => n !== e)] : [...prev.c_name, e] }))}>
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
                      {foodlist.map((item, idx) => (
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
              <label htmlFor="disease" className='text-sm'>
                Disease
              </label>
              <Listbox id="condition" value={input.disease[0]} onChange={(e) => setInput(prev => ({ ...prev, disease: prev.disease.includes(e) ? [...prev.disease.filter(n => n !== e)] : [...prev.disease, e] }))}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border-2 rounded-sm cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block capitalize truncate"> {input.disease.map((d) => d).join(', ')}</span>
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
                      {plans.map((disease, conditionIdx) => (
                        <Listbox.Option
                          key={conditionIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                          }
                          value={disease.name}
                        >

                          <>
                            <span
                              className={`block capitalize truncate ${input.disease.includes(disease.name) ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {disease.name}
                            </span>
                            {input.disease.includes(disease.name) ? (
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
              <label htmlFor="calorie" className='text-sm'>
                Calorie
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className=" border-2 rounded-sm pl-2 h-[40px]"
                type="number"
                name="calorie"
                id="calorie"
                required
              />
            </div>
            <div className='space-y-4'>
              <FilePond
                files={files}
                required={true}
                allowFileEncode={true}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={3}
                name="files"
                labelIdle="Drag & Drop your photo"
              />
            </div>
            <div className='flex items-center justify-center w-full'>
              <button
                type='submit'
                className='h-10 mt-16 bg-[#d4f4f6] font-semibold rounded-md w-36'
              >
                Add Food Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default AddFoodItem