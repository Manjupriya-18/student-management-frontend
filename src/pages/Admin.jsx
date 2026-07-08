import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Sidebar from "../Components/Sidebar";
import toast from "react-hot-toast";

const Admin = () => {

  const [admins, setAdmins] = useState([]);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [newAdmin, setNewAdmin] = useState({

    username: "",

    email: "",

    password: ""

  });

  useEffect(() => {

    fetchAdmins();

  }, []);

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

  const handleChange = (e) => {

    setNewAdmin({

      ...newAdmin,

      [e.target.name]: e.target.value

    });

  };

  const addAdmin = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      await api.post(

        "/admin/create/register",

        newAdmin,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      fetchAdmins();

      setShowModal(false);

      setNewAdmin({

        username: "",

        email: "",

        password: ""

      });

    }

    catch (error) {

      console.log(error);

      toast.error("Unable to create admin");

    }

  };

  const filteredAdmins = admins.filter(

    (admin) =>

      admin.username

        ?.toLowerCase()

        .includes(search.toLowerCase())

      ||

      admin.email

        ?.toLowerCase()

        .includes(search.toLowerCase())

  );

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">

            Admin Management

          </h1>

        </div>

        {/* Top */}

        <div className="flex gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow w-64">

            <p className="text-gray-500">

              Total Admins

            </p>

            <h2 className="text-4xl font-bold mt-2">

              {admins.length}

            </h2>

          </div>

          <div className="flex-1 flex gap-4">

            <input

              type="text"

              placeholder="Search Admin..."

              value={search}

              onChange={(e) =>

                setSearch(e.target.value)

              }

              className="flex-1 border rounded-xl p-4"

            />

            <button

              onClick={() =>

                setShowModal(true)

              }

              className="bg-orange-500 text-white px-6 rounded-xl font-semibold hover:bg-orange-600"

            >

              + Add Admin

            </button>

          </div>

        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4">

                  Username

                </th>

                <th className="p-4">

                  Email

                </th>

                <th className="p-4">

                  Role

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredAdmins.map((admin) => (

                <tr

                  key={admin.username}

                  className="border-t"

                >

                  <td className="p-4">

                    {admin.username}

                  </td>

                  <td className="p-4">

                    {admin.email}

                  </td>

                  <td className="p-4">

                    <span

                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full"

                    >

                      {admin.role}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Add Admin Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

          <div className="bg-white w-96 p-8 rounded-xl">

            <h2 className="text-2xl font-bold mb-6">

              Add New Admin

            </h2>

            <div className="space-y-4">

              <input

                type="text"

                name="username"

                placeholder="Username"

                value={newAdmin.username}

                onChange={handleChange}

                className="w-full border p-3 rounded"

              />

              <input

                type="email"

                name="email"

                placeholder="Email"

                value={newAdmin.email}

                onChange={handleChange}

                className="w-full border p-3 rounded"

              />

              <input

                type="password"

                name="password"

                placeholder="Password"

                value={newAdmin.password}

                onChange={handleChange}

                className="w-full border p-3 rounded"

              />

              <div className="flex justify-end gap-4">

                <button

                  onClick={() =>

                    setShowModal(false)

                  }

                  className="bg-gray-300 px-5 py-2 rounded"

                >

                  Cancel

                </button>

                <button

                  onClick={addAdmin}

                  className="bg-orange-500 text-white px-5 py-2 rounded"

                >

                  Create

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

};

export default Admin;