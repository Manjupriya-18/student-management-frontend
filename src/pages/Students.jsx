import { useState, useEffect } from "react";
import React from "react";
import Sidebar from "../Components/Sidebar";
import api from "../api/axiosInstance";

const Students = () => {

  const [students, setStudents] = useState([]);

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  const [selectedDept, setSelectedDept] = useState("");
  const [search,setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

const [editStudent, setEditStudent] = useState({
  rollnumber: "",
  name: "",
  phoneNumber: "",
  department: "",
  mark: ""
});

useEffect(()=>{

  const timer = setTimeout(()=>{

    handleSearch(search);

  },500);

  return ()=>clearTimeout(timer);

},[search]);





  useEffect(() => {

    if (selectedDept) {

      fetchDepartmentStudents();

    } else {

      fetchStudents();

    }

  }, [page, selectedDept]);



 

  const fetchStudents = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      const res = await api.get(

        `/admin?page=${page}&size=10`,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setStudents(res.data.content);

      setTotalPages(res.data.totalPages);

    }

    catch (err) {

      console.log(err);

    }

  };
  const updateStudent = async () => {

  try {

    const token = localStorage.getItem("accessToken");

    await api.put(

      "/admin/student",

      editStudent,

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    );

    setShowModal(false);

    fetchStudents();

  }

  catch(err){

    console.log(err);

  }

};



  const fetchDepartmentStudents = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      const res = await api.get(

        `/admin/filter?page=${page}&size=10&deptname=${selectedDept}`,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setStudents(res.data.content);

      setTotalPages(res.data.totalPages);

    }

    catch (err) {

      console.log(err);

    }

  };


  const handleSearch = async (name) => {

    try {

      if (!name.trim()) {

        if (selectedDept) {

          fetchDepartmentStudents();

        }

        else {

          fetchStudents();

        }

        return;

      }

      const token = localStorage.getItem("token");

      const res = await api.get(

        `/admin/search?name=${name}`,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setStudents(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };


  const handleDepartment = (dept) => {

    setPage(0);

    setSelectedDept(dept);

  };



  return (

    <div className="flex h-screen bg-gray-100 overflow-hidden">

      <Sidebar />
      <div className="flex-1 p-8 max-w-6xl mx-auto overflow-x-hidden">
        <h1 className="text-3xl font-bold mb-8">

          Student Management  
          </h1>

        <div className="flex flex-wrap items-center gap-5 mb-8 max-w-6xl">
          <input

            type="text"  placeholder="🔍 Search students by name..." className=" w-96 px-4  py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

             value={search}onChange={(e)=>setSearch(e.target.value)}

          />
          <select

            value={selectedDept} onChange={(e)=>handleDepartment(e.target.value)}className="w-56 px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"

          >

            <option value="">

              🏫 All Departments

            </option>

            <option value="CSE">

              CSE

            </option>

            <option value="ECE">

              ECE

            </option>

            <option value="IT">

              IT

            </option>

            <option value="MECH">

              MECH

            </option>

            <option value="AIDS">

              AIDS

            </option>

            <option value="AIML">

              AIML

            </option>

            <option value="CIVIL">

              CIVIL

            </option>

          </select>

        </div>

       <div className="max-w-6xl mx-auto">

  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="table-fixed w-full">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4 text-left">

                  Roll No

                </th>

                <th className="p-4 text-left">

                  Name

                </th>

                <th className="p-4 text-left">

                  Department

                </th>
                <th className="p-4 text-left">

                  Marks

                </th>
                <th className="p-4 text-left">

                  Actions

                </th>

              </tr>

            </thead>
            <tbody>

              {students.map((student)=>(

                <tr

                  key={student.rollnumber} className=" border-b hover:bg-gray-100 transition ">

                  <td className="p-4">

                    {student.rollnumber}

                  </td>
                  <td className="p-4">

                    {student.name}

                  </td>
                  <td className="p-4">

                    {student.department?.deptname}

                  </td>

                  <td className="p-4">

                    {student.mark}

                  </td>
  <td className="p-4">
<button
  onClick={() => {
    setEditStudent({
      rollnumber: student.rollnumber,
      name: student.name,
      phoneNumber: student.phonenumber,
      department: student.department?.deptname,
      mark: student.mark
    });

    setShowModal(true);
  }}
  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
>
  Edit
</button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
          </div>

        </div>


        <div

          className=" max-w-6xl mx-auto flex justify-between items-center mt-8 ">

          <button

            disabled={page===0} onClick={()=>setPage(page-1)} className=" bg-gray-700 text-white px-5 py-2 rounded-lg disabled:opacity-50 ">

            ← Previous

          </button>



          <span className="font-semibold">

            Page {page+1} of {totalPages}

          </span>



          <button

            disabled={page===totalPages-1}onClick={()=>setPage(page+1)}

            className="bg-blue-600 text-white  px-5  py-2  rounded-lg  disabled:opacity-50  " >

            Next →

          </button>
          {
showModal && (

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

<div className="bg-white w-[500px] rounded-2xl shadow-xl p-8">

<h2 className="text-2xl font-bold mb-6">

Edit Student

</h2>

<div className="space-y-4">

<input
className="w-full border p-3 rounded-lg"
value={editStudent.name}
onChange={(e)=>
setEditStudent({
...editStudent,
name:e.target.value
})
}
/>

<input
className="w-full border p-3 rounded-lg"
value={editStudent.phoneNumber}
onChange={(e)=>
setEditStudent({
...editStudent,
phoneNumber:e.target.value
})
}
/>

<input
className="w-full border p-3 rounded-lg"
value={editStudent.rollnumber}
onChange={(e)=>
setEditStudent({
...editStudent,
rollnumber:e.target.value
})
}
/>

<select

className="w-full border p-3 rounded-lg"

value={editStudent.department}

onChange={(e)=>

setEditStudent({

...editStudent,

department:e.target.value

})

}

>

<option>CSE</option>

<option>ECE</option>

<option>IT</option>

<option>MECH</option>

<option>AIDS</option>

<option>AIML</option>

<option>CIVIL</option>

</select>

<input

type="number"

className="w-full border p-3 rounded-lg"

value={editStudent.mark}

onChange={(e)=>

setEditStudent({

...editStudent,

mark:e.target.value

})

}

/>

</div>

<div className="flex justify-end gap-4 mt-8">

<button

onClick={()=>setShowModal(false)}

className="px-5 py-2 bg-gray-300 rounded-lg"

>

Cancel

</button>

<button

onClick={updateStudent}

className="px-5 py-2 bg-blue-600 text-white rounded-lg"

>

Save

</button>

</div>

</div>

</div>

)
}

        </div>

      </div>

    </div>

  );

};

export default Students;