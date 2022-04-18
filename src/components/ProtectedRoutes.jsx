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

const useAuth = () => {
  const token = getCookies();
  // const user = { loggedIn: false };
  if( token ) {
    //call
    // console.log('check for auth: ' + user.loggedIn);
    console.log(token);
    console.log(token["access-token"]);
    // user.loggedIn = true
    return true
  }
  // console.log(user.loggedIn);
  //return user && user.loggedIn;
  return false
};

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
