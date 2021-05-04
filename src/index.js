import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Particles from 'react-particles-js';
import MouseParticles from 'react-mouse-particles'
ReactDOM.render(<>
  <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
<Particles
  style={{ position: "fixed" }}
  height="100%"
  width="100%"
  params={{
    particles: {
      color: {
        value: "#ffffff"
      },
      line_linked: {
        color: {
          value: "#ffffff"
        }
      },
      number: {
        value: 100
      },
      size: {
        value: 4
      }
    }
  }}
/>
</>,
  document.getElementById('particles-js')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
