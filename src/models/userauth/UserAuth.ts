// ASP
import asp from "../../services/api/asp";

// Schema
import { iUserAuth } from "./UserAuthSchema";

const UserAuth = {
  isAuth: false,

  async authUser(email: string, password: string) {
    const result: iUserAuth = await asp.signInWithEmailAndPassword(
      email,
      password
    );

    if (!result.data.info.hasError) {
      console.log(result);
      console.log("bien!!!");
      this.isAuth = true;
      return true;
    } else {
      console.log(result);
      console.log("mal!!!");
      this.isAuth = false;
      return false;
    }
  },

  signOut() {},
};

export default UserAuth;
