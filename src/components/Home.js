import React from 'react';
import Main from './Main'
import Navbar from './Navbar';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div>
    <Navbar />
      <article class="container-fluid" id="top">

        <Main />


      </article>
      <Footer />
    </div>
  );
}

export default Home
