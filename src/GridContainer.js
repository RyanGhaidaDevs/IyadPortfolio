import React from 'react';
import './App.css';
import Navbar from './Navbar';
import background from './background2.jpg';



var styles = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'scroll'

};

class GridContainer extends React.Component {
  constructor(props){
    super(props);


  }

  render() {
    return (
    <div class="grid-container" id="main" style={styles}>
    <div class="navBar"><Navbar> </Navbar></div>
    <div class="grid-sidebar">Sidebar</div>
    <div class="grid-item" onClick={()=> this.props.handleSelect(1)}>project 1</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-sidebar">Sidebar</div>   
    <div class="grid-item">project</div> 
    <div class="grid-item">project</div> 
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>  
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    <div class="grid-item">project</div>
    </div>
    )
  }
}

export default GridContainer;
