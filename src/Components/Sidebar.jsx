import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi";
import { FcDepartment } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate=useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/",{replace:true});
  };

  return (

    <div className="w-64 h-screen bg-slate-800 text-white p-5 flex flex-col">

      <h1 className="text-xl font-bold flex items-center gap-2">
        <MdOutlineSchool />
        Student Management
      </h1>

      <ul className="mt-6 space-y-3">

        <li>
          <NavLink
            to="/Admindashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-3 bg-blue-500 rounded-lg"
                : "flex items-center gap-2 p-3 hover:bg-blue-700 rounded-lg"
            }
          >
            <IoMdHome />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Students"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-3 bg-blue-500 rounded-lg"
                : "flex items-center gap-2 p-3 hover:bg-blue-700 rounded-lg"
            }
          >
            <HiOutlineUsers />
            Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Departments"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-3 bg-blue-500 rounded-lg"
                : "flex items-center gap-2 p-3 hover:bg-blue-700 rounded-lg"
            }
          >
            <FcDepartment />
            Departments
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Admin"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-3 bg-blue-500 rounded-lg"
                : "flex items-center gap-2 p-3 hover:bg-blue-700 rounded-lg"
            }
          >
            <MdOutlineAdminPanelSettings />
            Admins
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/PendingStudents"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-3 bg-blue-500 rounded-lg"
                : "flex items-center gap-2 p-3 hover:bg-blue-700 rounded-lg"
            }
          >
            <MdPendingActions />
            Pending Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-3 bg-blue-500 rounded-lg"
                : "flex items-center gap-2 p-3 hover:bg-blue-700 rounded-lg"
            }
          >
            <CiUser />
            Profile
          </NavLink>
        </li>

      </ul>

      {/* Logout at Bottom */}
      <div className="mt-auto pt-5">

        <button
          onClick={logout}
          className="w-full flex items-center gap-2 p-3 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          <FiLogOut />
          Logout
        </button>

      </div>

    </div>

  );
};

export default Sidebar;
