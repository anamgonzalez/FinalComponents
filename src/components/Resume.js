import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'


function Resume() {
  return (
    <div>
      <Navbar/>
      <div class="resume">
      <h1> Resume </h1>
      <img src="./Resume.png" alt="Ana Resume"></img>
      </div>
      <Footer/>
    </div>
  );
}

export default Resume
