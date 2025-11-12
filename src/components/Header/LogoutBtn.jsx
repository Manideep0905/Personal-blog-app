import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js';
import toast from "react-hot-toast";

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            toast.success("Logout successful");
        })
    }
  return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100'
            onClick={logoutHandler}
        >
            Logout
        </button>
  )
}

export default LogoutBtn
