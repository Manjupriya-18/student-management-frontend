import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admindashboard from './pages/Admindashboard'
import StudentDashboard from './pages/StudentDashboard'
import Getstarted from './pages/Getstarted'
import Departments from './pages/Departments'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import Students from './pages/Students'
import  Features  from './pages/Features'
import About from './pages/About'
import Contact from './pages/Contact'
import StudentSidebar from './Components/StudentSidebar'
import AcademicDetails from './pages/AcademicDetails'
import StudentProfile from './pages/StudentProfile'
import StudentSetting from './pages/StudentSetting'
import PendingStudents from './pages/PendingStudents'
import ProtectedRoute from './Components/ProtectedRoute'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/login", { replace: true });
        }
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [navigate]);
 
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
          <Route path='/Admindashboard' element={<ProtectedRoute allowedRoles={["ADMIN"]}><Admindashboard/></ProtectedRoute>}/>
          <Route path='/StudentDashboard' element={<ProtectedRoute allowedRoles={["STUDENT"]}><StudentDashboard/></ProtectedRoute>}/>
          <Route path='/Getstarted' element={<Getstarted/>}/>
          <Route path='/Departments' element={<Departments/>}/>
          <Route path='/Admin' element={<ProtectedRoute allowedRoles={["ADMIN"]}><Admin/></ProtectedRoute>}/>
          <Route path='/Profile' element={<ProtectedRoute allowedRoles={["ADMIN"]}><Profile/></ProtectedRoute>}/>
          <Route path='/Students' element={<ProtectedRoute allowedRoles={["ADMIN"]}><Students/></ProtectedRoute>}/>
          <Route path='/Features' element={<Features/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/StudentSidebar' element={<ProtectedRoute allowedRoles={["STUDENT"]}><StudentSidebar/></ProtectedRoute>}/>
          <Route path='/AcademicDetails' element={<ProtectedRoute allowedRoles={["STUDENT"]}><AcademicDetails/></ProtectedRoute>}/>
          <Route path='/StudentProfile' element={<ProtectedRoute allowedRoles={["STUDENT"]}><StudentProfile/></ProtectedRoute>}/>
          <Route path='/StudentSetting' element={<ProtectedRoute allowedRoles={["STUDENT"]}><StudentSetting/></ProtectedRoute>}/>
          <Route path='/PendingStudents' element={<ProtectedRoute allowedRoles={["ADMIN"]}><PendingStudents/></ProtectedRoute>}/>
          
      </Routes>

    
    </>
  )
}

export default App
