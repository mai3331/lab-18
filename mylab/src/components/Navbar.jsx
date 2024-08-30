import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
      backgroundImage: 'radial-gradient(circle 1292px at -13.6% 51.7%, rgba(0,56,68,1) 0%, rgba(163,217,185,1) 51.5%, rgba(255,252,247,1) 88.6%)'
    }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:'#623AA2',fontSize:'35px'}}>Utech</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/" style={{ fontSize: '20px',color:'#CC95C0'}}>
              Home
            </Link>
            <Link className="nav-link" to="/HelpCenter" style={{ fontSize: '20px',color:'#CC95C0'}}>
              Help Center
            </Link>
            <Link className="nav-link" to="/create" style={{ fontSize: '20px',color:'#CC95C0'}}>
            Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
