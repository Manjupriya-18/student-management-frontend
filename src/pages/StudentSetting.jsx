import React, { useEffect, useState } from "react";
import StudentSidebar from "../Components/StudentSidebar";
import api from "../api/axiosInstance";
 import { useNavigate } from "react-router-dom";
 import toast from "react-hot-toast";
 import ButtonSpinner from "../Components/loaders/ButtonSpinner";
 

const Settings = () => {
  const[Profile,setProfile]=useState({name:"",phoneNumber:"",email:""})
 const [showPassword,setShowPassword]=useState(false);
 const[loading,setLoading]=useState(false);
 
 const [passwords,setPasswords]=useState({
 
 currentPassword:"",
 
 newPassword:"",
 
 confirmPassword:""
 
 });


const navigate = useNavigate();
  useEffect(()=>{
  
  fetchProfile();
  
  },[]);
  const logout=()=>{

localStorage.removeItem("accessToken");
localStorage.removeItem("role");

navigate("/",{replace:true});

};
  const updateProfile = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    const res = await api.put(
      "/api/v1/student/profile",
      
        Profile,
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    setProfile(res.data);
     await fetchProfile();
    toast.success("Profile updated successfully!");
  } catch (err) {
    console.error(err);
  }
};
  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    const res= await api.get("/api/v1/student/profile",
    {
      headers:{
        Authorization :`Bearer ${token}`
      }
    }
  );
  setProfile(res.data);
  
  }
   const updatePassword=async()=>{

try{

const token=

localStorage.getItem("token");

await api.put(

"/api/v1/student/password",

passwords,

{

headers:{

Authorization:

`Bearer ${token}`

}

}

);

setShowPassword(false);

toast.success("Password updated");

}
catch(err){
  console.log(err)

}
   };
   

  return (
    <div className="flex min-h-screen bg-gray-100">
      <StudentSidebar />

      <div className="flex-1 ml-64 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        {/* Account Info */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            Account Information
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-500">Username</label>
              <p className="font-semibold">{Profile?.username}</p>
            </div>

            <div>
              <label className="text-gray-500">Role</label>
              <p className="font-semibold">{Profile.role}</p>
            </div>

            <div>
              <label className="text-gray-500">Department</label>
              <p className="font-semibold">{Profile.department}</p>
            </div>

            <div>
              <label className="text-gray-500">Roll Number</label>
              <p className="font-semibold">{Profile.rollnumber}</p>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            Edit Profile
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded-xl"
              value={Profile.name || ""}
  onChange={(e) =>
    setProfile({
      ...Profile,
      name: e.target.value,
    })
  }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-xl"
              value={Profile.email || ""}
  onChange={(e) =>
    setProfile({
      ...Profile,
      email: e.target.value,
    })
  }
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl"
               value={Profile.phoneNumber || ""}
  onChange={(e) =>
    setProfile({
      ...Profile,
      phoneNumber: e.target.value,
    })
  }
              
            />

            <button
disabled={loading}
className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
onClick={updateProfile}
>

{loading ? (
<>
<ButtonSpinner/>
Updating...
</>
):(
"Update Profile"
)}

</button>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            Change Password
          </h2>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full border p-3 rounded-xl"
              value={passwords.currentPassword}
              onChange={(e)=>setPasswords({
            ...passwords,
           currentPassword: e.target.value,
        })}
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-3 rounded-xl"
              value={passwords.newPassword}
              onChange={(e)=>setPasswords({
            ...passwords,
            newPassword: e.target.value,
        })}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-xl"
              value={passwords.confirmPassword}
              onChange={(e)=>setPasswords({
            ...passwords,
           confirmPassword: e.target.value,
        })}
            />

            <button  onClick={updatePassword}className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
              
              Change Password
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            Danger Zone
          </h2>

          <button onClick={logout}className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;