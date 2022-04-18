import axios from 'axios';
import { Navigate, Outlet } from "react-router-dom";

function getCookies() {
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
    let endpoint =  '/api/auth';

    const response = await axios.get(endpoint, {
      timeout: 0,
      headers: {
        "Content-Type": "application/text",
        "Authorization": "Bearer " + payload
      },
    });

    return response.data;
  };

const useAuth = async () => {
  const token = getCookies();
  if( token && token["access-token"] ) {
    const authBoolean = await authApiCall(token["access-token"]);
    console.log(authBoolean);
    console.log(token["access-token"]);
    return true
  }
  return false
};

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
