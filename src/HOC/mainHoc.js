import { AxiosError } from 'axios';
import { NextRouter, useRouter, withRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import useAuth from '../context/user.store';


/**********
  mainHOC is a higer order component. 
  Its main perpose is to delever all the essential data to page component
**********/

function mainHOC(
  WrappedComponent
) {
  const Component = (props) => {
    const { getToken, token, getUser, user } = useAuth();
    const router = useRouter();
    useEffect(() => {
      getToken()
    }, [getToken])

    useEffect(() => {
      if (token && !user) {
        getUser(token)
      }
    }, [token, getUser, user])
    useEffect(() => {
      if (user && (router.asPath === '/signin' || router.asPath === 'signup')) {
        router.push('/')
      }

      if (user && !user.admin && (router.asPath === '/add-admin' || router.asPath === '/manage-food-item' || router.asPath === '/manage-meditation')) {
        router.push('/')
      }
    }, [user, router])
    return <WrappedComponent {...(props)} />;
  };

  return Component;
}

export default mainHOC;
