import React from 'react';
import './App.css';
import Navbar from './components/Navbar';  // Importera navbar
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />  {/* Lägg till navigeringsfältet här */}
            <header className="App-header">
                <Home />
            </header>
            
            <div id="about">
                {<AboutMe/>}
            </div>

            <div id="projects">
                {<Projects/>}
            </div>

            <div id="contact">
                {<Contact/>}
            </div>
        </div>
    );
}

export default App;
