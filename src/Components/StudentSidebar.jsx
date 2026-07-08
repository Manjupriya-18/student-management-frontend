import React from "react";

import { NavLink, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {

FiHome,

FiUser,

FiBook,

FiSettings,

FiLogOut

}

from "react-icons/fi";

const StudentSidebar=()=>{
    const navigate=useNavigate();

const logout=()=>{

localStorage.removeItem("accessToken");

navigate("/",{replace:true});

};

const menuClass=({isActive})=>

isActive

?

"flex items-center gap-3 p-3 rounded-xl bg-blue-500 text-white"

:

"flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700";

return(

<div className="w-64 h-screen fixed left-0 top-0 bg-slate-900 text-white flex flex-col p-6">

<div>

<h1 className="text-3xl font-bold mb-10">

EduManage

</h1>

<div className="space-y-4">

<NavLink to="/StudentDashboard" className={menuClass}>

<FiHome/>

Dashboard

</NavLink>

<NavLink to="/StudentProfile" className={menuClass}>

<FiUser/>

My Profile

</NavLink>

<NavLink to="/AcademicDetails" className={menuClass}>

<FiBook/>

Academic Details

</NavLink>

<NavLink to="/StudentSetting" className={menuClass}>

<FiSettings/>

Settings

</NavLink>

</div>

</div>

<div className="mt-auto">

<button

onClick={logout}

className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-600 hover:text-white rounded-xl"

>

<FiLogOut/>

Logout

</button>

</div>

</div>

);

};

export default StudentSidebar;