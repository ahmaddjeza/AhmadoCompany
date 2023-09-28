import React from 'react';
import './Home.css';
import Image from '../IMG-29444.png';


function Home() {
    return (
      <div className="home-content">
     
        <h2>Hej! Mitt namn är Ahmad Djeza!</h2>
        <h3>Junior Full Stack Utvecklare</h3>
        <img className='img' src={Image} alt="Bild på mig" />
      </div>
    );
  }
  
export default Home;
