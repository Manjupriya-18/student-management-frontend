import React,{useEffect,useState} from "react";

import api from "../api/axiosInstance";

import Sidebar from "../Components/Sidebar";

import EditProfileModal from "../Components/EditProfileModal";

import ChangePasswordModal from "../Components/ChangePasswordModal";
import ProfileSkeleton from "../Components/loaders/ProfileSkeleton";
import { useNavigate } from "react-router-dom";

import {

FiUser,

FiMail,

FiPhone,

FiEdit,

FiLock,

FiLogOut,

FiChevronRight

}

from "react-icons/fi";
import toast from "react-hot-toast";

const Profile=()=>{
const navigate=useNavigate();
const [profile,setProfile]=useState({

name:"",

username:"",

email:"",

phoneNumber:"",

role:"",

aboutMe:""

});

const [showEdit,setShowEdit]=useState(false);

const [showPassword,setShowPassword]=useState(false);
 const [loading, setLoading] = useState(false);

const [passwords,setPasswords]=useState({

currentPassword:"",

newPassword:"",

confirmPassword:""

});

useEffect(()=>{
  

fetchProfile();

},[]);

const fetchProfile = async () => {
    try {
        setLoading(true);

        const token = localStorage.getItem("accessToken");

        const res = await api.get(
            "/profile",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setProfile(res.data);
    } catch (err) {
        console.log(err);
    } finally {
        setLoading(false);
    }
};

const updateProfile=async()=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(profile.email)){
    toast.error("Invalid email");
    return;
}
if(profile.phoneNumber.length!==10){
    toast.error("Phone number must be 10 digits");
    return;
}
    

try{

const token=

localStorage.getItem("accessToken");

await api.put(

"/profile",

{

name:profile.name,

phoneNumber:profile.phoneNumber,

aboutMe:profile.aboutMe,
email:profile.email

},

{

headers:{

Authorization:

`Bearer ${token}`

}

}

);

setShowEdit(false);

toast.success("Profile updated");

}

catch(err){

console.log(err);

}

};
if(loading){

return <ProfileSkeleton/>

}

const updatePassword=async()=>{

try{

const token=

localStorage.getItem("accessToken");

await api.put(

"/profile/password",

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

console.log(err);

}

};


const logout=()=>{

localStorage.removeItem("accessToken");
navigate("/",{replace:true});

};

return(

<>

<div className="flex min-h-screen bg-gray-100">

<Sidebar/>

<div className="flex-1 p-8">

<h1 className="text-4xl font-bold mb-8">

My Profile

</h1>

<div className="grid grid-cols-3 gap-6">

{/* LEFT CARD */}

<div className="bg-white rounded-2xl shadow overflow-hidden">

<div className="h-20 bg-purple-100"/>

<div className="flex flex-col items-center -mt-10">

<div

className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white"

></div>

<h2

className="text-3xl font-bold mt-4"

>

{profile.name || "User"}

</h2>

<p

className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full mt-2"

>

{profile.role}

</p>

</div>

<div className="p-8 space-y-6">

<div className="flex gap-4">

<FiUser size={20}/>

<div>

<p className="text-gray-500">

Username

</p>

<p className="font-semibold">

{profile.username}

</p>

</div>

</div>

<div className="flex gap-4">

<FiMail size={20}/>

<div>

<p className="text-gray-500">

Email

</p>

<p className="font-semibold">

{profile.email}

</p>

</div>

</div>

<div className="flex gap-4">

<FiPhone size={20}/>

<div>

<p className="text-gray-500">

Phone

</p>

<p className="font-semibold">

{profile.phoneNumber || "Not added"}

</p>

</div>

</div>

</div>

</div>

{/* RIGHT CARD */}

<div className="col-span-2 space-y-6">

<div className="bg-white p-6 rounded-2xl shadow">

<h2 className="text-2xl font-bold mb-4">

About Me

</h2>

<p>

{profile.aboutMe ||

"Manage students and administrators."}

</p>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<h2 className="text-2xl font-bold mb-5">

Account Settings

</h2>

<div className="space-y-4">

<button

onClick={()=>setShowEdit(true)}

className="w-full flex justify-between items-center border p-5 rounded-xl hover:bg-gray-50"

>

<div className="flex gap-4">

<FiEdit size={20}/>

<div className="text-left">

<h3 className="font-bold">

Edit Profile

</h3>

<p className="text-gray-500">

Update your information

</p>

</div>

</div>

<FiChevronRight/>

</button>

<button

onClick={()=>setShowPassword(true)}

className="w-full flex justify-between items-center border p-5 rounded-xl hover:bg-gray-50"

>

<div className="flex gap-4">

<FiLock size={20}/>

<div className="text-left">

<h3 className="font-bold">

Change Password

</h3>

<p className="text-gray-500">

Update your password

</p>

</div>

</div>

<FiChevronRight/>

</button>

</div>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<h2

className="text-red-600 text-2xl font-bold mb-5"

>

Danger Zone

</h2>

<button

onClick={logout}

className="w-full flex justify-between items-center border border-red-300 p-5 rounded-xl text-red-600"

>

<div className="flex gap-4">

<FiLogOut size={20}/>

<div>

<h3 className="font-bold">

Logout

</h3>

<p>

Logout from your account

</p>

</div>

</div>

<FiChevronRight/>

</button>

</div>

</div>

</div>

</div>

</div>

<EditProfileModal

show={showEdit}

setShow={setShowEdit}

profile={profile}

setProfile={setProfile}

updateProfile={updateProfile}

/>

<ChangePasswordModal

show={showPassword}

setShow={setShowPassword}

passwords={passwords}

setPasswords={setPasswords}

updatePassword={updatePassword}

/>

</>

);

};

export default Profile;