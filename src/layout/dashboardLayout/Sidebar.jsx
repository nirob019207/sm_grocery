import React, { useState } from "react";
import { FaTachometerAlt, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white h-screen p-4 ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      <button
        className="mb-6 text-gray-300 hover:text-white focus:outline-none"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "➤" : "⬅ Collapse"}
      </button>
      <nav>
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:bg-gray-700 px-4 py-2 rounded"
            >
              <FaTachometerAlt size={20} />
              {!isCollapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:bg-gray-700 px-4 py-2 rounded"
            >
              <FaCog size={20} />
              {!isCollapsed && <span><Link to="/dashboard/products">Products</Link></span>}
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:bg-gray-700 px-4 py-2 rounded"
            >
              <FaChartBar size={20} />
              {!isCollapsed && <span><Link to="/dashboard/users">Users</Link></span>}
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:bg-gray-700 px-4 py-2 rounded"
            >
              <FaCog size={20} />
              {!isCollapsed && <span><Link to="/dashboard/category">Category</Link></span>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
