// User auth model
import UserAuth from "../models/userauth/UserAuth"

function routeGuard() {
    const user: boolean = UserAuth.isAuth
    // if(!loading) {
    //     console.log('ended loading', user)
    //     return user ? true : false
    // }
    return user
}

export default routeGuard