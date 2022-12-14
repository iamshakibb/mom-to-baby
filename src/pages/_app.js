import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-notifications-component/dist/theme.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { RiShoppingBasketLine } from "react-icons/ri"
import SelectedFoodList from '../components/SelectedFoodList/SelectedFoodList';
import { useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import mainHOC from '../HOC/mainHoc';

function MyApp({ Component, pageProps }) {
  return <>
    <ReactNotifications />
    <Component {...pageProps} />
    <FoodBtn />
  </>
}

export default mainHOC(MyApp)


const FoodBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className='bg-red-500 w-[50px] h-[50px] flex justify-center items-center rounded-full right-5 bottom-5 md:right-10 md:bottom-10 fixed text-white text-base cursor-pointer'
        onClick={() => setIsOpen(prev => !prev)}
      >
        <RiShoppingBasketLine />
      </div>
      <SelectedFoodList isOpen={isOpen} closeModal={() => setIsOpen(prev => !prev)} />
    </>
  )
}