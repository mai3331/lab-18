import React from "react";
import { Link } from "react-router-dom";
const Page404=()=>{
    const pageStyle = {
        textAlign: 'center',
        padding: '50px',
        color: '#ffffff',
        background: '#282c34',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
      };
    
      const errorText = {
        fontSize: '6rem',
        margin: '20px 0',
        position: 'relative',
        animation: 'float 4s ease-in-out infinite',
      };
    
      const shadowText = {
        fontSize: '6rem',
        margin: '20px 0',
        color: '#ff4081',
        position: 'absolute',
        top: '5px',
        left: '5px',
        zIndex: '-1',
        opacity: '0.5',
        filter: 'blur(5px)',
      }
      const descriptionText = {
        fontSize: '1.5rem',
        marginBottom: '30px',
        color: '#61dafb',
      };
    
      const linkStyle = {
        fontSize: '1.2rem',
        padding: '10px 20px',
        background: '#61dafb',
        color: '#282c34',
        borderRadius: '50px',
        textDecoration: 'none',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s',
      };
    
      const linkHover = {
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
      };
      const keyframes = `
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `;


  return (
    <div style={pageStyle}>
      <style>{keyframes}</style>
      <div style={{ position: 'relative' }}>
        <h1 style={shadowText}>404</h1>
        <h1 style={errorText}>404</h1>
      </div>
      <p style={descriptionText}>Uh oh! We can't seem to find the page you're looking for.</p>
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.boxShadow = linkHover.boxShadow)}
        onMouseLeave={(e) => (e.target.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.2)')}
      >
        Go Back Home
      </Link>
    </div>
  );
}
export default Page404