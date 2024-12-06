import React from 'react'
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/api/auth/authSlice';


export const Topbar = () => {
  const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(logOut())
    localStorage.clear()
  }
  return (
    <div className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
    <h1 className="text-xl font-semibold">Admin Dashboard</h1>
    <div className="flex items-center gap-4">
      <div className="relative">
        <FaSearch className="absolute top-2 left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-200 px-10 py-2 rounded outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <FaBell size={20} className="text-gray-600 cursor-pointer" />
        <FaUserCircle size={24} className="text-gray-600 cursor-pointer" onClick={handleLogout} />
      </div>
    </div>
  </div>
  )
}
