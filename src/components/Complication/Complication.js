import { Disclosure, RadioGroup } from "@headlessui/react"
import { FiCheck, FiChevronDown } from "react-icons/fi"
import { plans } from "../../utils/data"

const Complication = ({ selected, handleOption }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-[#fdcbf1] rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
            <span>Before the suggestion please select if you have any complication.</span>
            <FiChevronDown />
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2">
            <RadioGroup value={selected} onChange={(e) => handleOption(e)}>
              <div className="space-y-2">
                {plans.map((plan, idx) => (
                  <RadioGroup.Option
                    key={plan.name + idx}
                    value={plan.name}
                    className={({ active, checked }) =>
                      `${active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                      }
                  ${selected.includes(plan.name) ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                      }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked, }) => (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium capitalize ${selected.includes(plan.name) ? 'text-white' : 'text-gray-900'
                                  }`}
                              >
                                {plan.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline text-[16px] ${selected.includes(plan.name) ? 'text-sky-100' : 'text-gray-500'
                                  }`}
                              >
                                <span>{plan.advice}</span>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {selected.includes(plan.name) && (
                            <div className="text-white shrink-0">
                              <FiCheck />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Complication