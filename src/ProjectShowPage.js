import React from 'react';
import './App.css';


// var styles = {
//   backgroundImage: `url(${background})`,
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundAttachment: 'scroll'

// };

class ProjectShowPage extends React.Component {
  constructor(props){
    super(props);

    
  }

  
  render() {
    return (
    <div id="showPage"> 
      <h1> Project Title </h1> 
      <button onClick={()=> this.props.handleBack()}>  back </button> 
    </div>)
  }
}

export default ProjectShowPage;
