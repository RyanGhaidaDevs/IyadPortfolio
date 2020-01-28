import React from 'react';
import './App.css';
import background from './background2.jpg';
import GridContainer from './GridContainer';
import ProjectShowPage from './ProjectShowPage';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      project: false 
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleBack = this.handleBack.bind(this)

  }

  handleSelect(id){
    this.setState({
      project: true
    }, ()=>console.log(this.state))
  } 

  handleBack(){
    this.setState({
      project: false 
    })
  }



  render() {
    return (
    <div > 
    {this.state.project  ?  <ProjectShowPage handleBack={this.handleBack}> </ProjectShowPage>  : <GridContainer handleSelect={this.handleSelect}> </GridContainer>}
    </div>)
  }
}

export default App;
