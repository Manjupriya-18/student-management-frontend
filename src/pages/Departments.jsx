import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Sidebar from "../Components/Sidebar";

const Department = () => {

  const [departments, setDepartments] = useState([]);

  useEffect(() => {

    fetchDepartments();

  }, []);

  const fetchDepartments = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      const res = await api.get(

        "/admin/departments",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      setDepartments(res.data);

    }

    catch(err){

      console.log(err);

    }

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar/>

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">

          Departments

        </h1>

        <div className="grid grid-cols-3 gap-6">

          {departments.map((dept,index)=>(

            <div

              key={index}

              className="bg-white p-6 rounded-xl shadow"

            >

              <h2 className="text-2xl font-bold text-blue-600">

                {dept.deptname}

              </h2>

              <p className="mt-4">

                👨‍🏫 Admin :

                <span className="font-semibold">

                  {dept.admin}

                </span>

              </p>

              <p className="mt-2">

                👨‍🎓 Students :

                <span className="font-semibold">

                  {dept.totalStudents}

                </span>

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Department;