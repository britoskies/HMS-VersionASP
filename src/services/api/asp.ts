import { useState } from "react";
import axios from "axios";

// Schema
import { iUserAuth } from "../../models/userauth/UserAuthSchema";

const signInWithEmailAndPassword = async (email: string, password: string) => {
  const apiURL: string = "https://localhost:7090/api/account/authenticate";
  const credentials: Object = {
    userName: email,
    password,
  };

  const result: iUserAuth = await axios
    .post(apiURL, credentials)
    .then((response) => response)
    .catch((error) => error);

  return result;
};

export default { signInWithEmailAndPassword };
