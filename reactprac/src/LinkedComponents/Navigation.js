import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Navigation extends Component{
  render(){
    return (
      <div className = 'main-nav'>
            <NavLink className = "link-style" to="/tiger"><button className = "categoryComponent">Tiger</button></NavLink>
            <NavLink className = "link-style" to="/balloons"><button className = "categoryComponent">Balloons</button></NavLink>
            <NavLink className = "link-style" to="/computers"><button className = "categoryComponent">Computers</button></NavLink>
            <NavLink className = "link-style" to="/search"><button className = "categoryComponent">Search</button></NavLink>
      </div>
    )
  }

}

export default Navigation;
