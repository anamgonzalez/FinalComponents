import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Main() {
  return (
    <div>
    <Navbar/>
    <div class="Intro">
      <h1>About Ana</h1>
      <img src="./Ana_Gonzalez01.jpg" alt="Ana profile"></img>
      <p>Ana Maria Gonzalez was born and raised in Miami, FL. She started drawing and computer development at a young age and has since developed her love for art and technology into a career. Recently she received her Bachelors of Fine Arts in Painting with a minor in Art History and Graphic Design from the University of Miami. She is currently learning Full Stack Web  Development at Wyncode Code Academy to further her skills in web design and development.</p>
      <Footer/>
      </div>
    </div>
  );
}

export default Main
