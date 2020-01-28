import React from 'react';
import './App.css';
import background from './background2.jpg';
import GridContainer from './GridContainer';
import ProjectShowPage from './ProjectShowPage';

var styles = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'scroll'

};

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      project: false 
    }
    this.handleSelect = this.handleSelect.bind(this)

  }

  handleSelect(id){
    console.log(id)
  } 



  render() {
    return (
    <div id="main" style={styles}> 
    {this.state.ptoject ? <ProjectShowPage handleSelect={this.handleSelect} > </ProjectShowPage> : <GridContainer> </GridContainer>}
    </div>)
  }
}

export default App;
