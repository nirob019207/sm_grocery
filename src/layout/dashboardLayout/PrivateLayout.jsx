import React from "react";
import { Outlet } from "react-router-dom"; 
import { Sidebar } from "../dashboardLayout/Sidebar";
import { Topbar } from "../dashboardLayout/Topbar";

export const PrivateLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Outlet/>

          
        </div>
      </div>
    </div>
  );
};
