import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { FaUsers } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import api from '../api/axiosInstance';
import {
  LineChart,Line,XAxis,YAxis,CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Admindashboard = () => {
  const data=[{name:"CSE",value:82},{name:"ECE",value:63},{name:"IT",value:83},{name:"AIDS",value:64},{name:"EEE",value:67},{name:"AIML",value:73},{name:"MECH",value:68}]


  const [recent,setRecent]=useState([])
  const [admins, setAdmins] = useState([]);
   const fetchAdmins = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      const res = await api.get(

        "/admin/admins",

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setAdmins(res.data);

    }

    catch (error) {

      console.log(error);

    }

  };
    useEffect(() => {
  
      fetchAdmins();
  
    }, []);
  
useEffect(() => {
  const fetchRecentSearches = async () => {
    try {
      const response = await api.get("/admin/recent-search");
      setRecent(response.data);
    } catch (error) {
      console.error("Error fetching recent searches:", error);
    }
  };

  fetchRecentSearches();
}, []);
const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f97316",
  "#8b5cf6",
  "#06b6d4",
  "#f59e0b",
  "#14b8a6",
  "#ec4899",
];
const marksData = [
  { month: "Jan", marks: 68 },
  { month: "Feb", marks: 72 },
  { month: "Mar", marks: 75 },
  { month: "Apr", marks: 70 },
  { month: "May", marks: 78 },
  { month: "Jun", marks: 74 },
];

  return (
    <>
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1 p-5'>
      <h1 className='text-3xl  p-3'>Dashboard</h1>
      
       <div className='grid grid-cols-4 gap-8'>
      <div className='bg-white p-5 rounded-xl h-35 mt-15 shadow  '>
        <div className=' flex items-center justify-between '>
          <FaUsers className='w-14 h-14 mt-3 bg-blue-300 rounded-3xl' />
          <h1 className='font-bold  mr-9   '>Total Students</h1>
        </div>
        <p className='font-medium text-3xl px-28  '>500 </p>
         
         
          </div>
          <div className=' bg-white p-5 rounded-xl h-35 mt-15 shadow  '>
            <div className=' flex items-center justify-between '>
            <FaUniversity className='w-14 h-14 mt-3 bg-green-300 rounded-3xl' />
             
             <h1 className='font-bold     '>Total Departments</h1>

          </div>
          <p className='font-medium text-3xl px-30  '>13</p>
         </div>
          <div className=' bg-white p-5 rounded-xl h-35 mt-15 shadow  '>
            <div className=' flex items-center justify-between '>
            <MdSecurity  className='w-14 h-14 mt-3 bg-violet-300 rounded-3xl' />
             
             <h1 className='font-bold  mr-11    '>Total Admins</h1>

          </div>
          <p className='font-medium text-3xl px-30  '>{admins.length}</p>
         </div>
         <div className=' bg-white p-3 rounded-xl h-35 mt-15 shadow  '>
            <div className=' flex  items-center justify-between '>
            <MdOutlineAutoGraph   className='w-14 h-14 mt-3 bg-orange-300 rounded-3xl' />
             
             <h1 className='font-bold px-10   '>Average marks</h1>

          </div>
          <p className='font-medium text-3xl px-30   '>74</p>
         </div>
         
         
      </div>
      <div className='grid grid-cols-3  gap-3 mt-8'>
      
      <div className=' bg-white rounded-xl shadow w-[400px] h-[350px]  '>
    <ResponsiveContainer width="100%" height={300}>
      <p className=' flex px-8 font-bold'>Student by Departments</p>
      <PieChart>
        <Pie data={data} dataKey="value"
        innerRadius={60}
        outerRadius={100}
        paddingAngle={3}>
          {data.map((entry,index)=>(
            <Cell
              key={index}
              fill={COLORS[index%COLORS.length]}
            />
          ))}
        </Pie>
         <Tooltip />
          <Legend layout="vertical" align="right" />
      </PieChart>
    </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-xl shadow p-5 h-[350px]">
  <h2 className="font-bold mb-4">Average Marks Trend</h2>

  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={marksData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="marks"
        stroke="#2563eb"
      />
    </LineChart>
  </ResponsiveContainer>
</div>
<div className="bg-white rounded-xl shadow p-5 h-[350px]">

<h2 className="font-bold mb-5">

Recent Searches

</h2>

<div className="space-y-4">

{

recent.map((item,index)=>(

<div

key={index}

className="flex justify-between items-center border-b pb-3"

>

<div>

<p className="font-semibold">

🔍 {item.name}

</p>

<p className="text-sm text-gray-500">

{item.deptname}

</p>

</div>

<div>

<span

className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

{item.mark}

</span>

</div>

</div>

))

}

</div>

</div>
    </div>
    </div>
    </div>
   
    </>

    
  )
}

export default Admindashboard