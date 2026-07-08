import React from 'react'
import { TbSchool } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { FiUserMinus } from "react-icons/fi";
import { LiaUniversitySolid } from "react-icons/lia";
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <>
        <div className="min-h-[140vh] lg:min-h-screen bg-[url('/Studying-rafiki.png')]    bg-contain bg-no-repeat bg-[position:right_center] px-4 lg:px-10">
        <div className='flex items-center gap-2'>
        <TbSchool  className=' w-12 h-12 '/> <span className="bg-gradient-to-r from-black to-blue-800  text-3xl lg:text-4xl   bg-clip-text  text-transparent">Edumanage</span>
        <div className='flex flex-wrap justify-center gap-6 lg:gap-16 text2xl lg:text-4xl bg-vlip-text flex-1'>
        <span className='gap-8 lg:gap-16' >Home</span>
        <NavLink to="/Features" className={({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-blue-600"
  }>
        <span className='gap-6 lg:gap-16'>Features</span>
        </NavLink>
        <NavLink to="/About"  className={({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-blue-600"
  }>
        <span>About</span>
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-blue-600"
  }>
        <span className='gap-6 lg:gap-16'>Contact</span>
        </NavLink>
        
        
        </div >
        <NavLink to="/Login"  className={({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-blue-600 flex items-center gap-2"
  }>
        <CiUser className='w-10 h-8 mt-6' /> 
        <span className='text-4xl mt-3 p-2 ' >Login</span>
        </NavLink>
        </div>
        <div className='p-4 lg:px-14 py-10 '>
            <p className='text-4xl lg:text-6xl'>Student</p>
            <p className='text-4xl lg:text-6xl text-blue-800 '>Management</p>
            <p className='text-4xl lg:text-6xl mt-3 '>Simplified</p>
            <p className='mt-6 text-xl'>A smart and efficiency way to manage student</p>
            <p className='text-xl'>information, attendance, grades, and more ---</p>
            <p className='text-xl'>all in one place</p>
     
        </div>
        <div className=' px-4 lg:px-14 mt-6 flex flex-col sm:flex-row gap-6  '>
          <NavLink to={"/Getstarted"}>
                 <button className=' bg-blue-800 text-white p-3 rounded-xl'>Get started</button>
                 </NavLink>
                 <NavLink to={"/About"}>
                 <button className='px-3  text-black border border-2 h-13   border-blue-500 rounded-xl'>Learn More </button>
                 </NavLink>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 px-6 py-24'>
         <div className='flex items-center gap-2'>
           <HiOutlineUsers  className='h-8 w-10 rounded-full bg-gray-300 '/>
            <div className='flex flex-col leading-tight  '>
            <span className='font-medium '>500+</span>
            <span>Students</span>
         </div>
         </div>
         
          <div className='flex items-center gap-2'> <FiUserMinus className='h-8 w-10 rounded-full bg-gray-300 ' />
           <div className='flex flex-col leading-tight '>
              <span className='font-medium'>30+</span>
              <span>Teachers</span>
           </div> 
           </div>
           <div className='flex items-center gap-2'> <LiaUniversitySolid  className='h-8 w-10 rounded-full bg-gray-300 ' />
           <div className='flex flex-col leading-tight '>
              <span className='font-medium'>15+</span>
              <span>Departments</span>
           </div> 
           </div>
          
          
        </div>
        </div>
         
        </></div>
  )
}

export default Home