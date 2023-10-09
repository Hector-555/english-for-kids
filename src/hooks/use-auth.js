import { useSelector } from "react-redux"

const useAuth = () => {
    const {email, token, id} = useSelector(state => state.user)

    let user = email
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!email) {
        user = localStorage.getItem('email')
    }

    return {
        isLoggedIn,
        email: user,
        token,
        id,
    }
}

export default useAuth