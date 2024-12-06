import React from 'react';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Topbar } from './Topbar';
import { Topbar2 } from './Topbar2'; 
export const UserLayout = () => {
  const location = useLocation(); 
  const isHome = location.pathname === '/'; 

  return (
    <div>
      {isHome ? <Topbar /> : <Topbar2 />} 
      <Outlet />
      <Footer />
    </div>
  );
};
