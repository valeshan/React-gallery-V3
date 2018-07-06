import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap';



class Navigation extends Component{
  render(){
    return (
      <div className = 'main-nav'>
            <NavLink className = "link-style" to="/tiger"><Button bsStyle = "primary" className = "categoryComponent">Tiger</Button></NavLink>
            <NavLink className = "link-style" to="/balloons"><Button bsStyle = "primary" className = "categoryComponent">Balloons</Button></NavLink>
            <NavLink className = "link-style" to="/computers"><Button bsStyle = "primary" className = "categoryComponent">Computers</Button></NavLink>
            <NavLink className = "link-style" to="/search"><Button bsStyle = "primary" className = "categoryComponent">Search</Button></NavLink>
      </div>
    )
  }

}

export default Navigation;
