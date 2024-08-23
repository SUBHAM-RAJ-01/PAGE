// src/components/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close the menu after clicking a link
    };

    return (
        <nav className="navbar">
            <div className="logo"><span className='logo'><img src='\images\logo.png' alt='logo' className='logo'></img></span></div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>HOME</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>CONTACT</a>
            </div>
            <div className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '☀️' : '🌙'}
            </div>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isOpen && (
                <div className="nav-links-mobile">
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>HOME</a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>ABOUT</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>PROJECTS</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>CONTACT</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
