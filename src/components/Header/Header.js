import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { randomId } from "../../utils/randomId"
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Popover, Transition } from '@headlessui/react';
import useAuth from '../../context/user.store';
import { BiUserCircle } from "react-icons/bi"

const Header = () => {
  // to change state of the menu
  const [isOpen, setIsOpen] = useState(false)

  let modalContentRef = React.useRef(null);

  React.useEffect(() => {
    /***
   * Handle outside click fuction
   *This function will set the isOpen 
    state to false if user click outside 
    of the modal content.
    ***/
    const handleOutSideClick = (e) => {
      if (isOpen && !modalContentRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document?.addEventListener('mousedown', handleOutSideClick);
    }

    // removing the event listener
    return () => {
      document?.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [isOpen]);

  return (
    <header>
      <div className='container grid grid-cols-[120px_1fr] justify-end place-items-center relative mt-2'>
        {/* Logo */}
        <div>
          <Link href='/'>
            <a>
              <Image src="/svg/Mom To Baby.svg" width={120} height={40} alt="Mom to Baby" />
            </a>
          </Link>
        </div>
        {/* desktop navbar */}

        <DesktopNav />
        {/* mobile navbar */}
        {
          isOpen && (
            <div
              ref={modalContentRef}
              className="w-[190px] absolute z-50 top-7 right-10"
            >
              <MobileNav />
            </div>
          )
        }
        {/* menu btn */}
        <div className="relative z-50 flex items-center justify-end w-full h-full text-base lg:hidden">
          <button onClick={() => setIsOpen(prev => !prev)}>
            <BsThreeDotsVertical />
          </button>
          {/* <FiTime/> */}
        </div>
      </div>
    </header>
  )
}

export default Header


const DesktopNav = () => {
  const { user, signOut } = useAuth()
  return (
    <div className='items-center justify-end hidden w-full lg:flex'>
      <ul className='flex justify-end mr-8 space-x-4 font-semibold uppercase text-s'>
        {
          navList.map(nav => (
            <Link href={nav.link} key={nav.id}>
              <a>
                <li>
                  {nav.name}
                </li>
              </a>
            </Link>
          ))
        }
      </ul>


      {
        user ? <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                group  bg-orange-700 px-3 py-2 text-white flex items-center justify-center text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-10 h-10 rounded-full`}
              >
                <BiUserCircle />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 w-screen max-w-xs px-4 mt-3 transform sm:px-0 ">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    {
                      user?.admin && (
                        <>
                          <div className="p-4 cursor-pointer bg-gray-50">
                            <Link href="/add-admin" className="flex items-center">
                              <a>
                                <span className="text-sm font-medium text-gray-900">
                                  Add Admin
                                </span>
                              </a>
                            </Link>
                          </div>
                          <div className="p-4 cursor-pointer bg-gray-50">
                            <Link href="/add-food-item" className="flex items-center">
                              <a>
                                <span className="text-sm font-medium text-gray-900">
                                  Add Food Item
                                </span>
                              </a>
                            </Link>
                          </div>
                        </>
                      )
                    }
                    <div className="p-4 cursor-pointer bg-gray-50" >
                      <button className="flex items-center w-full" onClick={signOut}>
                        <span className="text-sm font-medium text-gray-900">
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover> : (
          <>
            <Link href='/signin'>
              <a href="">
                <button className='h-10 bg-[#d4f4f6] font-semibold rounded-md w-36'>Sign In
                </button>
              </a>
            </Link>
          </>
        )
      }

    </div>
  )
}

const MobileNav = () => {
  const { user, signOut } = useAuth()
  return (
    <div className='w-full h-full p-6 bg-white shadow-lg lg:hidden'>
      <ul className='flex flex-col justify-start w-full h-full space-y-4 font-semibold uppercase text-s'>
        {
          navList.map(nav => (
            <Link href={nav.link} key={nav.id}>
              <a>
                <li>
                  {nav.name}
                </li>
              </a>
            </Link>
          ))
        }
        {
          user ? <>
            {
              user?.admin && (
                <>
                  <Link href={'/add-admin'}>
                    <a>
                      <li>
                        Add Admin
                      </li>
                    </a>
                  </Link>
                  <Link href={'/add-food-item'}>
                    <a>
                      <li>
                        Add Food Item
                      </li>
                    </a>
                  </Link>
                </>
              )
            }
            <li>
              <button onClick={signOut}>
                LogOut
              </button>
            </li>
          </> : <Link href={'/signin'}>
            <a>
              <li>
                  Sign In
              </li>
            </a>
          </Link>
        }
      </ul>
    </div>
  )
}

const navList = [
  {
    id: randomId(),
    name: "BMI Calculator",
    link: "/bmi-calculator",
  },
  {
    id: randomId(),
    name: "Recipes",
    link: '/recipes'
  },
  {
    id: randomId(),
    name: 'suggested food',
    link: '/suggested-food'
  },
  {
    id: randomId(),
    name: 'Meditation',
    link: '/meditation'
  }
]