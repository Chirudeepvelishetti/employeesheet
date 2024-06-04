
import React from 'react'
 import { useNavigate } from 'react-router-dom'
export default function Screen1() {
    const navigate = useNavigate();
  return (
    <div >
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <h1>Welcome to Application</h1>
        <div className='d-flex'>
                <button className='btn btn-primary me-2' onClick={()=> navigate("login")}>Sign In</button>
                <button className='btn btn-secondary' onClick={()=> navigate("register")}>Sign Up</button>
        </div>
    </div>
    </div>
  )
}

