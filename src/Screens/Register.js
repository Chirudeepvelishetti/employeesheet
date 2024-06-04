import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
   const navigate=useNavigate();
   const [firstname , setFirstname]=useState('');
   const [lastname , setLastname]=useState('');
   const[lastnameerr ,setLasterr]=useState('');
   const [email , setEmail]=useState('');
   const [emailerror , setEmailerror]=useState('')
   const [password , setPassword]=useState('');
   const [passworderr , setPassworderr]=useState('');
   const[usererr,setUsererr]=useState('');
    const [error , setError]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(!email || !password){
            setError("enter email and password details")
        }
        else if (emailerror || passworderr || usererr||passworderr) {
          setError("wrong email or password format");
      } else {
          setError('');
          navigate('/home');
      }
    }
    const emailvalidation = (e)=>{
      const value = e.target.value;
      setEmail(value);
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
    const username = (e) => {
      const value = e.target.value;
      setFirstname(value);
      if (value === '') {
          setUsererr('Enter first name');
      } else {
          setUsererr('');
      }
  };

  const lastnamee = (e) => {
      const value = e.target.value;
      setLastname(value);
      if (value === '') {
          setLasterr('Enter last name');
      } else {
          setLasterr('');
      }
  };
  return (
    <div>
    <div className='d-flex justify-content-center align-items-center vh-100 '>
        <div className='border border-light border-5 rounded-4 p-5'>
        <h1 className='fs-8 fw-bold '>WELCOME TO REGISTER PAGE </h1>
         <h6 className='text-center p-2'>If you are new please register here</h6>
         <div className='d-flex justify-content-center'>
        
         <form onSubmit={handleSubmit}>
         <div>
         <label className='py-2'><strong>FIRST NAME : </strong></label> <br/>
         <input type='text' className='p-1 rounded' value={firstname} onChange={username}></input>
         </div>
         {usererr && <p className='text-danger'>{usererr}</p>}
         <div>
         <label className='py-2'><strong>LAST NAME : </strong></label> <br/>
         <input type='text' className='p-1 rounded' value={lastname} onChange={lastnamee}></input>
         </div>
         {lastnameerr && <p className='text-danger'>{lastnameerr}</p>}
         <div>
         <label className='py-2'><strong>EMAIL ID : </strong></label> <br/>
         <input type='text' className='p-1 rounded' value={email} onChange={emailvalidation}></input>
         </div>
         {emailerror && <p className='text-danger'>{emailerror}</p>}
         <div>
         <label className='py-2'><strong>PASSWORD : </strong></label> <br/>
         <input type='text' className='p-1 rounded' value={password} onChange={passwordvalid}></input>
         </div>
         {passworderr && <p className='text-danger'>{passworderr}</p>}
         {error && <p className='text-danger'>{error}</p>}
         <div className='pt-3'>
            <button className='btn btn-success me-4'><strong>Submit</strong></button>
            <button className='btn btn-secondary px-3' onClick={()=>navigate("/login")}><strong>Log in</strong></button>
         </div>
         </form>
         </div>
        </div>    
        </div>
        </div>
        
         
       
  )
}
