import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import api from "../api/axiosInstance";

const TempPending = () => {

  const [students, setStudents] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editStudent, setEditStudent] = useState({});

  useEffect(() => {

    fetchPendingStudents();

  }, []);

  const fetchPendingStudents = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      const res = await api.get(

        "/admin/pending-students",

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

  const approveStudent = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      await api.put(

        "/admin/pending-student",

        editStudent,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setShowModal(false);

      fetchPendingStudents();

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">

          Pending Student Requests

        </h1>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4 text-left">Name</th>

                <th className="p-4 text-left">Username</th>

                <th className="p-4 text-left">Email</th>

                <th className="p-4 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              {

                students.map(student => (

                  <tr

                    key={student.username}

                    className="border-b hover:bg-gray-100"

                  >

                    <td className="p-4">

                      {student.name}

                    </td>

                    <td className="p-4">

                      {student.username}

                    </td>

                    <td className="p-4">

                      {student.email}

                    </td>

                    <td className="p-4">

                      <button

                        onClick={() => {

                          setEditStudent({

                            username: student.username,

                            name: student.name,

                            email: student.email,

                            phoneNumber: student.phoneNumber,

                            rollnumber: "",

                            department: "",

                            mark: ""

                          });

                          setShowModal(true);

                        }}

                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"

                      >

                        Approve

                      </button>

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </div>

      </div>

      {

        showModal &&

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

          <div className="bg-white w-[550px] rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Approve Student

            </h2>

            <div className="space-y-4">

              <input

                value={editStudent.username}

                readOnly

                className="w-full border p-3 rounded-lg bg-gray-100"

              />

              <input

                value={editStudent.name}

                readOnly

                className="w-full border p-3 rounded-lg bg-gray-100"

              />

              <input

                placeholder="Roll Number"

                value={editStudent.rollnumber}

                onChange={(e) =>

                  setEditStudent({

                    ...editStudent,

                    rollnumber: e.target.value

                  })

                }

                className="w-full border p-3 rounded-lg"

              />

              <select

                value={editStudent.department}

                onChange={(e) =>

                  setEditStudent({

                    ...editStudent,

                    department: e.target.value

                  })

                }

                className="w-full border p-3 rounded-lg"

              >

                <option value="">Select Department</option>

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

                placeholder="Marks"

                value={editStudent.mark}

                onChange={(e) =>

                  setEditStudent({

                    ...editStudent,

                    mark: e.target.value

                  })

                }

                className="w-full border p-3 rounded-lg"

              />

              <input

                placeholder="Phone Number"

                value={editStudent.phoneNumber}

                onChange={(e) =>

                  setEditStudent({

                    ...editStudent,

                    phoneNumber: e.target.value

                  })

                }

                className="w-full border p-3 rounded-lg"

              />

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button

                onClick={() => setShowModal(false)}

                className="px-5 py-2 bg-gray-300 rounded-lg"

              >

                Cancel

              </button>

              <button

                onClick={approveStudent}

                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"

              >

                Approve Student

              </button>

            </div>

          </div>

        </div>

      }

    </div>

  );

};

export default TempPending;