import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import useAuth from '../context/user.store'
import AXIOS from '../libs/clients/axiosClient'
import { getCookie } from 'cookies-next';
import { withRouter } from 'next/router';
import mainHOC from '../HOC/mainHoc';
import notify from '../utils/notificator';
const SignIn = ({ router }) => {
  const { token } = useAuth()
  const [input, setInput] = useState({
    email: "",
  })

  const handleInputs = (e) => {
    if (e.target.name === 'email') {
      setInput(prev => ({ ...prev, email: e.target.value }))
    }
  }

  const handleSumbit = async e => {
    e.preventDefault();
    if (input.email.length > 0) {
      try {
        const res = await AXIOS('/add-admin', {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`
          },
          data: JSON.stringify({ email: input.email })
        })
        if (res.data.user) {
          notify('success', `${input.email} is now a admin.`)
        } else {
          notify('danger', res.data.message || `Unable to create ${input.email} admin`)
        }
      } catch (error) {
        notify('danger', error.response?.data?.message || `Unable to create ${input.email} admin`)
      }
    }
  }
  return (
    <Layout>
      <div className='container flex items-center justify-center w-full h-screen'>
        <div className='max-w-[500px] w-full rounded-b-xl shadow-2xl'>
          <div className='bg-[#fdcbf1] p-4 w-full text-center rounded-t-xl'>
            <h1 className='text-xl'>Admin</h1>
          </div>

          <form onSubmit={(e) => handleSumbit(e)} className='px-8 py-10 space-y-4'>
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
            <button
              type='submit'
              className='h-10 mt-16 bg-[#d4f4f6] font-semibold rounded-md w-36'
            >
              Create Admin
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default withRouter(SignIn)