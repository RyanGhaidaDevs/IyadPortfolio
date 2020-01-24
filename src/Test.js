import React from 'react';
import './App.css';
import background from './background.jpg';
import Navbar from './Navbar';


class Test extends React.Component {

 

  render() {
    return (
    <div class="grid-container">
    <div class="grid-item"><Navbar> </Navbar></div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>  
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>  
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>    
    </div>
    )
  }
}

export default Test;
