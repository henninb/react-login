import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
// delete a cookie
// document.cookie = 'access-token=; Max-Age=0'
  const [auth, setAuth] = useState(null)

  function getCookies() {
      console.log('getCookies');
      let cookies = document.cookie.split(';');
      let authTokens = {
          'access-token': null
      };

      for (const cookie of cookies) {
          let cookiePair = cookie.split('=');

          if (authTokens.hasOwnProperty(cookiePair[0].trim().toLowerCase()))
              authTokens[cookiePair[0].trim()] = decodeURIComponent(cookiePair[1]);
      }

      return authTokens;
  }

  const authApiCall = async (payload) => {
    console.log('authApiCall');

    try {
    const response = await axios.get("/api/auth", {
      timeout: 0,
      headers: {
        "Content-Type": "application/text",
        "Authorization": "Bearer " + payload
      },
    });

    return response.data;
    } catch (error ) {
      console.log(error.data);
      window.location.href = '/login'
    }
    return false
    //return response.data.toLowerCase() === 'true'
  };

  // const useAuth = useCallback(async () => {
  //   console.log('useAuth');
  //   const token = getCookies();
  //   if( token && token["access-token"] ) {
  //     const authBoolean = await authApiCall(token["access-token"]);
  //     if( authBoolean === true ) {
  //       setAuth(true)
  //     }
  //   }
  //   setAuth(false)
  // }, []);

  // useEffect(() => {
  //   if( !auth ) {
  //     useAuth();
  //   }
  // }, [useAuth, auth])


  const fetchUserAuth = useCallback(async () => {

    console.log('useAuth');
    const token = getCookies();
    if( token && token["access-token"] ) {
      const authBoolean = await authApiCall(token["access-token"]);
      if( authBoolean === true ) {
        setAuth(true)
      }
    }
    setAuth(false)
  }, []);

  useEffect(() => {
    if( !auth) {
      fetchUserAuth();
      console.log("auth:" + auth);
    }
  }, [fetchUserAuth, auth])

  //const isAuth = await useAuth();
  //console.log('is auth: ' + isAuth);
 // console.log('isAuth: ' + JSON.stringify(isAuth));
  //pass the auth token to the Outlet
  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  )
}
