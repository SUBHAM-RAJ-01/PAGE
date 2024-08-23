// src/components/App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';  // Global styles

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div className={darkTheme ? 'app dark' : 'app light'}>
            <Navbar toggleTheme={toggleTheme} darkTheme={darkTheme} />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
