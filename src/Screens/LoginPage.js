import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate();
    const [username , setUsername]=useState('');
    const [emailerror , setEmailerror]=useState('')
    const [password , setPassword]=useState('');
    const [passworderr , setPassworderr]=useState('');
    const [error , setError]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUsername('');
        setPassword('');
        setError('');
        if(!username || !password){
            setError("enter email and password details")
        }
        else if (emailerror || passworderr) {
          setError("wrong email or password format");
      } else {
          setError('');
          navigate('/home');
      }
    }
    const emailvalidation = (e)=>{
      const value = e.target.value;
      setUsername(value);
      const  regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if( !regex.test(value)){
          setEmailerror('enter valid email')
      }
      else{
        setEmailerror('');
      }
    }
    const passwordvalid =(e)=>{
      const value = e.target.value;
      setPassword(value);
      const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!pattern.test(value)){
        setPassworderr("enter valid password here");
      }
      else{
        setPassworderr('');
      }
    }
  return (
   <div>
        <div className='d-flex justify-content-center align-items-center vh-100 '>
        <div className='border border-light border-5 rounded-4 p-5'>
        <h1 className='fs-8 fw-bold '>WELCOME TO LOGIN HERE </h1>
         <h6 className='text-center p-2'>Please log in with your registered email id and password</h6>
         <div className='d-flex justify-content-center'>
        
         <form onSubmit={handleSubmit}>
         <div>
         <label className='py-2'><strong>USERNAME : </strong></label> <br/>
         <input type='text' className='p-1 rounded' placeholder='enter email id' value={username} onChange={emailvalidation} ></input>
         </div>
         {emailerror && <p className='text-danger'>{emailerror}</p>}
         <div>
         <label className='py-2'><strong>PASSWORD : </strong></label> <br/>
         <input type='text' className='p-1 rounded' placeholder='enter password'  value={password} onChange={passwordvalid} ></input>
         </div>
         {passworderr && <p className='text-danger'>{passworderr}</p>}
         {error && <p className='text-danger'>{error}</p>}
         <div className='pt-3'>
            <button className='btn btn-success me-4' ><strong>Submit</strong></button>
            <button className='btn btn-secondary px-4' onClick={()=>navigate("/")}><strong>Back</strong></button>
         </div>
         </form>
         </div> 
        </div>
        </div>
   </div>
  )
}
