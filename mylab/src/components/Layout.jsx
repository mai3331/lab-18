import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './BreadCrumbs';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs/>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
