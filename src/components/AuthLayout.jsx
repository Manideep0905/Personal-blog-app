import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { Spinner } from '../components/index.js';


export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // //simpler way by using only authstatus i.e., asking the store about authStatus
        // if(authStatus === true) {
        //     navigate("/")
        // } else if(authStatus === false) {
        //     navigate("/login")
        // }

        //complex way i.e., taking the user's authentication status(authentication) and also comparing it with the store(authStatus). Why are we doing this? because we take different scenarios into consideration
        if(authentication && authStatus !== authentication) {
            navigate("/login")
        } else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    
  return loader ? <Spinner /> : <>{children}</>
}
