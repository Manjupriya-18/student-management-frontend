import api from "../api/axiosInstance";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

const Getstarted = () => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const [confirmpass,setConfirmpass]=useState("")
  const navigate=useNavigate()

  const handleregister=async()=>{
    try {
   const response=await api.post("/auth/register",  {
      username,
      email,
      password
    });

  toast.success("Registration successful!");
  navigate("/Login")
} catch (error) {
  if (error.response) {
    const errors = error.response.data;

    Object.values(errors).forEach((msg) => {
      toast.error(msg);
    });
  } else {
    toast.error("Something went wrong!");
  }
}

  }
  return (
    <div>
      <>
      <div className='min-h-screen flex flex-row'>
      <div className="w-1/2 bg-[url('/signup.avif')] bg-cover bg-center">

      </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center px-10'>
         <p className='text-4xl font-bold '>Sign Up</p>
      
     
      <p className='mt-4 text-gray-600 text-lg' >create your account and manage now</p>
      <div className='flex gap-6'>
      <input className='border mt-5 p-3 max-w-xs rounded-xl' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your username' name="" id="" />
      <input className='border mt-5 p-3 rounded-xl' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' name="" id="" />
      </div>
      <input className='border mt-5 p-3 max-w-xs rounded-xl' type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" name="" id="" />
      <input className='border mt-5 p-3 max-w-xs rounded-xl' type="text" value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} placeholder='confirm Password' name="" id="" />
      <button onClick={handleregister} className='border mt-12 bg-blue-800 text-white p-3 max-w-xs rounded-xl'>Register</button>
      <div className='flex mt-3'>
        <p>Already have an account?</p>
        <Link to={"/Login"}>
         <p className='text-blue-800 px-3'>Login</p></Link>

       
      </div>
      
      </div>
      </div>
      </>
    </div>
  )
}

export default Getstarted