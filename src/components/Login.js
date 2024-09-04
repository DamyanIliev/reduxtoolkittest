import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/userSlice'

function Login() {

    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>{
        dispatch(login({name:"Damyan", age: 23, email:"damianiliev6@abv.bg"}))
    }}
    >Login</button>
    <button onClick={()=>{ dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login
