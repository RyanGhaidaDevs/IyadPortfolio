import React from 'react';
import './App.css';
import background from './background2.jpg';
import Navbar from './Navbar';
import Test from './Test';

var styles = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'scroll'

};

class App extends React.Component {
  render() {
    return (
    <div id="main" style={styles}> 
    <Test> </Test>
    </div>)
  }
}

export default App;
