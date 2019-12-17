import React from 'react';
import './App.css';
import background from './background.jpg';

var styles = {
  backgroundImage: `url(${background})`,
  backgroundSize: '80% 140%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'

};

class App extends React.Component {
  render() {
    return (
    <div id="main" style={styles}> 
    <div className="grid-container">
    <aside className="grid-sidebar">1</aside>
    <div className="grid-item">2</div>
    <div className="grid-item">3</div>
    <div className="grid-item">4</div>
    <div className="grid-item">5</div>
    <div className="grid-item">6</div>
    <div className="grid-item">7</div>
    <div className="grid-item">8</div>
    <aside className="grid-sidebar">9</aside>
    <div className="grid-item">10</div>
    <div className="grid-item">11</div>
    <div className="grid-item">12</div>
    <div className="grid-item">13</div>
    <div className="grid-item">14</div>
    </div>
    </div>)
  }
}

export default App;
