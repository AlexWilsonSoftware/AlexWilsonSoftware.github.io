// Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import "../css/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <p style={{ color: '#fff' }}>&copy; 2025 Alex Wilson</p>
            <ul className="footer-icons">
                <li>
                    <a href="https://www.linkedin.com/in/alex-wilson-331696322/" target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin size={24} color="white"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AlexWilsonSoftware" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} color="white"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/alexx._.wilsonn/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="white"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default Footer;
