import React,{useEffect,useState}

from "react";
import api from "../api/axiosInstance";
import ProfileSkeleton from "../Components/loaders/ProfileSkeleton";

import StudentSidebar

from "../Components/StudentSidebar";

const StudentProfile=()=>{

const [student,setStudent]=useState({});
 const [loading, setLoading] = useState(false);

useEffect(()=>{

fetchStudent();

},[]);
if(loading){

return <ProfileSkeleton/>

}

const fetchStudent=async()=>{
try{
  setLoading(true)
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
catch (err) {
        console.log(err);
    } finally {
        setLoading(false);
    }

};

return(

<div className="flex">

<StudentSidebar/>

<div className="flex-1 ml-64 min-h-screen bg-slate-100 p-10">

  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-40"></div>

    <div className="px-10 pb-10">

      <div className="-mt-16 flex flex-col items-center">

        <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center text-5xl font-bold text-blue-600">
          {student.name?.charAt(0)}
        </div>

        <h1 className="text-3xl font-bold mt-4">
          {student.name}
        </h1>

        <p className="text-gray-500">
          @{student.username}
        </p>

        <span className="mt-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
          {student.role}
        </span>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-slate-50 p-5 rounded-2xl">
          <h3 className="text-gray-500 mb-2">Email</h3>
          <p className="font-semibold text-lg">
            {student.email}
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl">
          <h3 className="text-gray-500 mb-2">Phone Number</h3>
          <p className="font-semibold text-lg">
            {student.phoneNumber}
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl">
          <h3 className="text-gray-500 mb-2">Department</h3>
          <p className="font-semibold text-lg">
            {student.department}
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl">
          <h3 className="text-gray-500 mb-2">Roll Number</h3>
          <p className="font-semibold text-lg">
            {student.rollnumber}
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

</div>

);

};

export default StudentProfile;