import { Disclosure } from "@headlessui/react"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

const AddFood = ({ handleSelectFood }) => {
  const [input, setInput] = useState("")
  const handleInputs = (e) => {
    setInput(e.target.value.toLowerCase())
  }

  const handleAddForm = (e) => {
    e.preventDefault()
    if (input.length) {
      handleSelectFood(input)
      setInput("")
    }
  }
  return (
    <div className='mb-10'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-[#fdcbf1] rounded-tl-lg rounded-tr-lg  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
              <span>You can add your prefferable food in the list</span>
              <FiChevronDown />
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2 ">
              <form onSubmit={handleAddForm} className='flex flex-col p-5 bg-blue-400 rounded-bl-lg rounded-br-lg'>
                <input
                  onChange={(e) => handleInputs(e)}
                  className=" border-2 rounded-sm pl-2 w-full md:w-1/2 h-[40px]"
                  placeholder='Enter your food name'
                  type="text"
                  name="food_name"
                  value={input}
                  required
                />
                <button type='submit' className='h-10 mt-4 bg-[#d4f4f6] font-semibold rounded-md w-36'>Add</button>
              </form>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>

  )
}

export default AddFood