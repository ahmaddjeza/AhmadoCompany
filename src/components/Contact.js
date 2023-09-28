import React from 'react';
import './Contact.css';



function Contact() {
    return (
      <div className="Contact-content">

<div className="kontakt-container">
      <div className="mina-uppgifter">

        <p>Namn: Ahmad Djeza</p>
        <p>Telefonnummer: 0790791998</p>
        <p>Adress: Irisgatan 1A , Mölndal , 43161</p>
        <p>Email: Djezaahmad@gmail.com</p>
      </div>
      
      <div className="formulär">
        <h3>Kontakta Mig</h3>
        <form>
          <input type="text" placeholder="Namn" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Telefonnummer" required />
          <textarea placeholder="Meddelande" required></textarea>
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
 
      </div>
    );
  }
  
export default Contact;
