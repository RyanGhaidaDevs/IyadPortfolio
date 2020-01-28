import React from 'react';
import './App.css';
import background from './background2.jpg';
import GridContainer from './GridContainer';

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
    <GridContainer> </GridContainer>
    </div>)
  }
}

export default App;
