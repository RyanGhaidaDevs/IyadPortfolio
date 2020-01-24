import React from 'react';
import './App.css';



class Navbar extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
   alert("works")
  }

  render() {
    return (
      <div id="Navbar" onClick={() => this.handleClick()}>
        <h1 > Navbar </h1> 
      </div> 
    )


  }
}

export default Navbar;
