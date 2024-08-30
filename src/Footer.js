// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="\images\logo.png" alt="Logo" />
                </div>
                <div className="footer-icons">
                    <a href="www.linkedin.com/in/subham-raj-5a1a402ab" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/SUBHAM-RAJ-01" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/subhamr456" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="mailto:subhamraj_work@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {getYear()} Subham Raj. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
