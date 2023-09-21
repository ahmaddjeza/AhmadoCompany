import React from 'react';
import './Home.css';
import Image from '../IMG-29444.png';


function Home() {
    return (
      <div className="home-content">
        <h1>Min Portfolio</h1>
        <p>Välkommen till min programmerarportfolio!</p>
        <img className='img' src={Image} alt="Bild på mig" />
      </div>
    );
  }
  
export default Home;
