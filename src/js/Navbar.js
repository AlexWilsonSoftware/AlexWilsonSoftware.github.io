import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import "../css/Navbar.css";

function Navbar() {
  return (
      <nav>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{maxWidth: '2rem', maxHeight: '2rem'}}>
                  <img src={logo} alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain',  marginTop: '0.2rem'}}/>
              </div>
              <p className="name"style={{color: '#fff' }}>Alex Wilson</p>
          </div>
          <ul>
              <li>
                  <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
              </li>
              <li>
                  <Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About Me</Link>
            </li>
            <li>
                <Link to="/projects" style={{color: 'white', textDecoration: 'none'}}>Projects</Link>
            </li>
          </ul>
          <div className="hidden" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{maxWidth: '2rem', maxHeight: '2rem', top: '1px'}}>
                  <img src={logo} alt="logo" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
              </div>
              <p className="name" style={{color: '#fff'}}>Alex Wilson</p>
          </div>
      </nav>

  );
}

export default Navbar;
