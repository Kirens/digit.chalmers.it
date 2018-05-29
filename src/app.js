import React from 'react';
import ReactDOM from 'react-dom';
import About from './about.js';
import img from "../dist/public/images/digitlogo.png";

const App = props => (
  <div style={mainDivisionStyle}>
    <img style={imgStyle} src={img}/>
    <p style={linkDivisionStyle}>
      <a style={linkStyle} href="mailto:digit@chalmers.it">digit@chalmers.it</a> |
      <a style={linkStyle} href="https://irc.chalmers.it">#digIT on irc.chalmers.it</a> |
      <a style={linkStyle} href="https://www.facebook.com/digitchalmers">Facebook</a> |
      <a style={linkStyle} href="https://twitter.com/digITcth">Twitter</a> |
      <a style={linkStyle} href="https://github.com/cthit">GitHub</a></p>
    <About/>
  </div>
);

//Css styling

const mainDivisionStyle={
  textAlign: 'center'
}

const imgStyle={
  width: '420px',
  height: '420px',
}

const linkStyle= {
  color: '#467382',
  textDecoration: 'none',
  paddingLeft: '5px',
  paddingRight: '5px'
}

const linkDivisionStyle= {
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default App
