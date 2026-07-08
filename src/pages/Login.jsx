import api from "../api/axiosInstance";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StudentDashboard from './StudentDashboard'
import toast from "react-hot-toast";
import DashboardSkeleton from "../Components/loaders/DashboardSkeleton";

const Login = () => {
  const[username, setUsername]=useState("")
  const[password,setPassword]=useState("")
    const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  if(loading){

return <DashboardSkeleton/>

}
  const handlelogin=async()=>{
     setLoading(true);
    try{
      const response = await api.post("/auth/login", {
  username,
  password,
});
      localStorage.setItem(
    "accessToken",
    response.data.accessToken
);

localStorage.setItem(
    "role",
    response.data.role
);
      localStorage.setItem("role",response.data.role)
      
    
      if(response.data.role==="ADMIN"){
      navigate('/Admindashboard',{replace:true})
      }
      else{
        navigate('/StudentDashboard',{replace:true})
      }
    }
    catch(error){
       if (!error.response) {
   
    toast.error("Cannot connect to the server. Please try again later.");
  } else if (error.response.status === 401) {
    toast.error("Invalid username or password.");
  } else {
    toast.error("Something went wrong.");
  }

       
    }finally {
    setLoading(false);
  }


  }

  return (
    <div>
      <>
      <div className='min-h-screen flex flex-row'>
        
        
      
      
      <div className="w-1/2 bg-[url('/loginn.avif')] bg-cover bg-center">
      </div>
      <div className='w-full lg:w-1/2 flex flex-col justify-center px-10'>
         <p className='text-4xl font-bold '>Login</p>
      
     
      <p className='mt-4 text-gray-600 text-lg' >Welcome back! Please Login into your account</p>
      <input className='border mt-5 p-3 max-w-xs rounded-xl' type="text" placeholder='Enter your username' value={username} onChange={(e)=>setUsername(e.target.value)} name="" id="" />
      <input className='border mt-5 p-3 max-w-xs rounded-xl' type="password"  placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} name="" id="" />
      <button onClick={handlelogin} className='border mt-12 bg-blue-800 text-white p-3 max-w-xs rounded-xl'>Login</button>
      <div className='flex mt-3'>
        <p>Don't have an account?</p>
        <Link to={"/Getstarted"}>
         <p className='text-blue-800 px-3'>Get Started</p></Link>

       
      </div>
      
      </div>

      </div>
      </>
    </div>
  )
}

export default Login