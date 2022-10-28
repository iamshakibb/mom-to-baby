import React from 'react'
import Header from '../Header'

const Layout = ({children, ...props}) => {
  return (
    <>
      <Header/>
      <main className='overflow-x-hidden' {...props}>
        {/* className='mt-[45px]' */}
        {children}
      </main>
    </>
  )
}

export default Layout