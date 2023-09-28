import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
    const [activeLink, setActiveLink] = useState('home'); // Standardlänken sätts till 'home'

    return (
        <div className='header'>
        <nav className="navbar">
            <a 
                href="/" 
                onClick={() => setActiveLink('home')} 
                className={activeLink === 'home' ? 'active' : ''}
            >
                Hem
            </a>
            <a 
                href="#about" 
                onClick={() => setActiveLink('about')} 
                className={activeLink === 'about' ? 'active' : ''}
            >
                Om mig
            </a>
            <a 
                href="#projects" 
                onClick={() => setActiveLink('projects')} 
                className={activeLink === 'projects' ? 'active' : ''}
            >
                Projekt
            </a>
            <a 
                href="#contact" 
                onClick={() => setActiveLink('contact')} 
                className={activeLink === 'contact' ? 'active' : ''}
            >
                Kontakt
            </a>
        </nav>
        </div>
    );
}

export default Navbar;
