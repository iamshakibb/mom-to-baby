import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { randomId } from "../../utils/randomId"
import { BsThreeDotsVertical } from 'react-icons/bs';


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
      <div className='container grid grid-cols-[120px_1fr] justify-end place-items-center relative'>
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
              className="w-[190px] h-[200px] absolute z-50 top-7 right-10"
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
  return (
    <div className='hidden w-full lg:block'>
      <ul className='flex justify-end space-x-4 font-semibold uppercase text-s'>
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
    </div>
  )
}

const MobileNav = () => {
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