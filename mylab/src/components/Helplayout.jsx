import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <>
 <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <h1 className="text-center" style={{ marginBottom: '20px' }}>Help Center</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <NavLink
          to="FAQ"
          style={{
            display: 'block',
            width: '120px',
            textAlign: 'center',
            color: 'white',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            border: '1px solid lightgray',
            backgroundColor: '#FF6F61', 
            backgroundImage:
              'linear-gradient(135deg, #FF6F61 0%, #D83A56 100%)',
          }}
        >
          FAQ
        </NavLink>
        <NavLink
          to="ContactUs"
          style={{
            display: 'block',
            width: '120px',
            textAlign: 'center',
            color: 'white',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            border: '1px solid lightgray',
            backgroundColor: '#FF6F61', 
            backgroundImage:
              'linear-gradient(135deg, #FF6F61 0%, #D83A56 100%)',
          }}
        >
          Contact
        </NavLink>
      </div>
    </nav>

      <Outlet />
    </>
  );
};

export default HelpLayout;
