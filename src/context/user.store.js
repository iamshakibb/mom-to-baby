import { devtools } from 'zustand/middleware';
import { immer } from "zustand/middleware/immer"
import create from 'zustand';
import AXIOS from '../libs/clients/axiosClient';
import notify from '../utils/notificator';
import { setCookie, deleteCookie, getCookie } from 'cookies-next';
const useAuth = create()(
  devtools(
    immer(set => (
      {
        user: null,
        token: null,
        signIn: async (email, password) => {
          try {
            const res = await AXIOS('/auth/signin', {
              method: "POST",
              data: JSON.stringify({ email, password })
            })
            set(state => {
              state.user = res.data.user;
              state.token = res.data.token
            })
            setCookie(`token`, JSON.stringify(
              res.data.token
            ))
            return { success: true }
          } catch (error) {
            notify('danger', error?.response?.data?.message || 'Unable to login. Please try again later')
            return { success: false }
          }
        },
        signUp: async (name, email, password) => {
          try {
            const res = await AXIOS('/auth/signup', {
              method: "POST",
              data: JSON.stringify({ name, email, password })
            })
            return { success: true }
          } catch (error) {
            notify('danger', err?.response?.data?.message || 'Unable to login. Please try again later')
            return { success: false }
          }
        },
        signOut: () => {
          set(state => {
            state.user = null;
            state.token = null;
          })
          deleteCookie("token")
        },
        getToken: () => {
          const token = getCookie("token")
          if (token) {
            set(state => {
              state.token = JSON.parse(token)
            })
          }
        },
        getUser: async (token) => {
          try {
            const res = await AXIOS('/profile', {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            })
            set(state => {
              state.user = res.data.user
            })
          } catch (error) {
            notify('danger', error?.response?.data?.message || 'Unable to get user')
          }
        }
      }
    ))
  )
);

export default useAuth
