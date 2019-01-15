import projects from '../data/projects.json';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
          <div>
          <h1>Projects</h1>
            <img src="./public/IronMan.jpg" alt="iron"></img>
            <p>{ this.props.description }  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letr</p>
            <img src="./public/Phoenix.jpg" alt="Pheon"></img>
            <p>{ this.props.description }  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letr</p>
          </div>
        <Footer/>
      </div>
  )
}
}

export default Projects
