import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../authcontext/AuthContextProvider'

function PrivateRoute({children}) {
    const {state}=useContext(AppContext)
    if(!state.isAuth){
        return <Navigate to ="/login"/>

    }
}

export default PrivateRoute