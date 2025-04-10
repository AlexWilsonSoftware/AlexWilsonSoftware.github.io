import React from 'react';
import { Link } from 'react-router-dom';

//TODO move into external css
function Navbar() {
  return (
      <nav style={{ backgroundColor: '#000', padding: '10px', display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center' }}>
          <li style={{ margin: '0 20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Me</Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
