import { useEffect, useState } from "react";

// Auth
import UserAuth from "../models/userauth/UserAuth";

export const useAuthStatus = () => {
  const auth = UserAuth.isAuth;

  // assume user to be logged out
  const [loggedIn, setLoggedIn] = useState(false);

  // keep track to display a spinner while auth status is being checked
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // auth listener to keep track of user signing in and out
    if (auth) setLoggedIn(true);
    setCheckingStatus(false);
  }, []);

  return { loggedIn, checkingStatus };
};
