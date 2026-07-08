import React,{useEffect,useState}

from "react";

import api from "../api/axiosInstance";

import StudentSidebar

from "../components/StudentSidebar";

const AcademicDetails=()=>{

const [student,setStudent]=useState({});

useEffect(()=>{

fetchData();

},[]);

const fetchData=async()=>{

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

};

const status=()=>{

if(student.mark>=90)

return "Excellent";

if(student.mark>=75)

return "Good";

if(student.mark>=50)

return "Average";

return "Needs Improvement";

};

return(

<div className="flex">

<StudentSidebar/>

<div className="flex-1 ml-64 p-10 bg-slate-100 min-h-screen">

  <h1 className="text-4xl font-bold mb-8">
    Academic Details
  </h1>

  <div className="grid md:grid-cols-3 gap-6 mb-8">

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">Roll Number</h3>
      <p className="text-3xl font-bold text-blue-600">
        {student.rollnumber}
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">Department</h3>
      <p className="text-3xl font-bold text-purple-600">
        {student.department}
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">Mark</h3>
      <p className="text-3xl font-bold text-green-600">
        {student.mark}
      </p>
    </div>

  </div>

  <div className="bg-white p-8 rounded-3xl shadow">

    <h2 className="text-2xl font-bold mb-6">
      Performance Analysis
    </h2>

    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span>Academic Score</span>
        <span>{student.mark}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${student.mark}%` }}
        ></div>
      </div>
    </div>

    <div className="mt-6">
      <span
        className={`px-4 py-2 rounded-full text-white font-semibold
        ${
          student.mark >= 90
            ? "bg-green-600"
            : student.mark >= 75
            ? "bg-blue-600"
            : student.mark >= 50
            ? "bg-yellow-500"
            : "bg-red-600"
        }`}
      >
        {status()}
      </span>
    </div>

  </div>

</div>

</div>

);

};

export default AcademicDetails;