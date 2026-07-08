import React, { useEffect, useState } from "react";

import api from "../api/axiosInstance";

import StudentSidebar from "../Components/StudentSidebar";

import {

FiUser,

FiBook,

FiAward,

FiMail,

FiPhone

}

from "react-icons/fi";

const StudentDashboard = () => {

const [student,setStudent]=useState({

name:"",

username:"",

email:"",

phoneNumber:"",

role:"",

department:"",

rollnumber:"",

mark:""

});

useEffect(()=>{

fetchStudent();

},[]);

const fetchStudent=async()=>{

try{

const token=

localStorage.getItem("accessToken");


const res=

await api.get(

"/api/v1/student/profile",

{

headers:{

Authorization:

`Bearer ${token}`

}

}

);

setStudent(res.data);

}

catch(error){

console.log(error);

}

};

const getStatus=()=>{

if(student.mark>=90)

return "Excellent 🟢";

if(student.mark>=75)

return "Good 🟡";

if(student.mark>=50)

return "Average 🟠";

return "Needs Improvement 🔴";

};

return(

<div className="flex bg-gray-100 min-h-screen">

<StudentSidebar/>

<div className="flex-1 ml-64 p-8">

{/* HEADER */}

<div>

<h1 className="text-4xl font-bold">

Welcome back 👋

</h1>

<p className="text-gray-500 mt-2">

Student Dashboard

</p>

</div>

{/* TOP CARDS */}

<div className="grid md:grid-cols-4 gap-6 mt-8">

<div className="bg-white p-6 rounded-2xl shadow">

<FiUser size={30}/>

<p className="text-gray-500 mt-4">

Student Name

</p>

<h2 className="text-2xl font-bold">

{student.name}

</h2>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<FiBook size={30}/>

<p className="text-gray-500 mt-4">

Department

</p>

<h2 className="text-2xl font-bold">

{student.department}

</h2>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<FiAward size={30}/>

<p className="text-gray-500 mt-4">

Mark

</p>

<h2 className="text-2xl font-bold">

{student.mark}

</h2>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<p className="text-gray-500">

Roll Number

</p>

<h2 className="text-2xl font-bold">

{student.rollnumber}

</h2>

</div>

</div>

{/* CONTACT */}

<div className="bg-white rounded-2xl shadow p-8 mt-8">

<h2 className="text-3xl font-bold mb-8">

Contact Information

</h2>

<div className="space-y-5">

<div className="flex gap-4">

<FiMail size={22}/>

<p>{student.email}</p>

</div>

<div className="flex gap-4">

<FiPhone size={22}/>

<p>{student.phoneNumber}</p>

</div>

</div>

</div>

{/* PERFORMANCE */}

<div className="bg-white rounded-2xl shadow p-8 mt-8">

<h2 className="text-3xl font-bold mb-8">

Performance Status

</h2>

<div>

<h3 className="text-3xl font-bold">

{getStatus()}

</h3>

</div>

<div className="mt-8">

<div className="w-full bg-gray-200 rounded-full h-4">

<div

className="bg-blue-600 h-4 rounded-full"

style={{

width:`${student.mark}%`

}}

>

</div>

</div>

<p className="mt-3 text-gray-500">

{student.mark}% Overall Performance

</p>

</div>

</div>

</div>

</div>

);

};

export default StudentDashboard;