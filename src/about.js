import React from 'react';
import ReactDOM from 'react-dom';

const About = props => (
  <div style = {divStyle} id="about">
    <h1 style={headStyle}>About us</h1>
    <p style = {pStyle}>digIT is the commitee responsible for managing and developing the digital systems of the IT programme</p>
    <p style = {pStyle}>Our services includes chalmers.it, IRC, and various digital equipments in our student division premises. Most of our software development is hosted on <a style={linkInTextStyle}href="https://github.com/cthit">Github</a>.</p>
    <p style = {pStyle}>Do you have any ideas for improvements or simply want to get in touch with us? Shoot us an email!</p>
  </div>
);

//Css styling
const headStyle={
  color: '#3d3d3d'
}

const pStyle= {
  color: '#666666',
  textAlign: 'left',
  fontFamily: 'verdana'
};

const linkInTextStyle= {
  color: '#2e4b54',
  textDecoration: 'none'
}

const divStyle= {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '400px'
}

export default About
