import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import useAuth from '../context/user.store'
import AXIOS from '../libs/clients/axiosClient'
import { getCookie } from 'cookies-next';
import { withRouter } from 'next/router';
import mainHOC from '../HOC/mainHoc';
import notify from '../utils/notificator';
import Link from 'next/link';
const SignUp = ({ router }) => {
  const { signUp, user } = useAuth()
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    c_password: ""
  })

  const handleInputs = (e) => {
    if (e.target.name === 'name') {
      setInput(prev => ({ ...prev, name: e.target.value }))
    }
    if (e.target.name === 'email') {
      setInput(prev => ({ ...prev, email: e.target.value }))
    }
    if (e.target.name === 'password') {
      setInput(prev => ({ ...prev, password: e.target.value }))
    }
    if (e.target.name === 'c-password') {
      setInput(prev => ({ ...prev, c_password: e.target.value }))
    }
  }

  const handleSumbit = async e => {
    e.preventDefault();
    if (input.email.length > 0 && input.password.length > 0 && input.name.length > 0 && input.c_password.length > 0) {
      if (input.c_password !== input.password) {
        notify('danger', "Confirm password does not match with password!")
      } else {
        const res = await signUp(input.name, input.email, input.password)
        if (res.success) {
          router.push('/signin')
        }
      }
    }
  }
  return (
    <Layout>
      <div className='container flex items-center justify-center w-full h-screen'>
        <div className='max-w-[500px] w-full rounded-b-xl shadow-2xl'>
          <div className='bg-[#fdcbf1] p-4 w-full text-center rounded-t-xl'>
            <h1 className='text-xl'>Sign Up</h1>
          </div>

          <form onSubmit={(e) => handleSumbit(e)} className='px-8 py-10 space-y-4'>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="name" className='text-sm'>
                Name
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className="border-2 rounded-sm pl-2 h-[40px]" placeholder='amy'
                type="name"
                name="name"
                id="name"
                required
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="email" className='text-sm'>
                Email
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className="border-2 rounded-sm pl-2 h-[40px]" placeholder='amy@xyz.com'
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="password" className='text-sm'>
                password
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className=" border-2 rounded-sm pl-2 h-[40px]" placeholder="•••••••••••••••••"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor="c-password" className='text-sm'>
                password
              </label>
              <input
                onChange={(e) => handleInputs(e)}
                className=" border-2 rounded-sm pl-2 h-[40px]" placeholder="•••••••••••••••••"
                type="password"
                name="c-password"
                id="c-password"
                required
              />
            </div>
            <button
              type='submit'
              className='h-10 mt-16 bg-[#d4f4f6] font-semibold rounded-md w-36'
            >
              Sign Up
            </button>
            <div className='flex items-center justify-end w-full group'>
              <Link href="/signin">
                <a className='text-gray-600 group-hover:underline'>
                  <>Already have a account</>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default withRouter(SignUp)