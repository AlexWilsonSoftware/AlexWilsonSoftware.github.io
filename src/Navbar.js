// Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'inline', margin: '0 20px' }}>
                    <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About Me</a>
                </li>
                <li style={{ display: 'inline', margin: '0 20px' }}>
                    <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
                </li>
                <li style={{ display: 'inline', margin: '0 20px' }}>
                    <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
