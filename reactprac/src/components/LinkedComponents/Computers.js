import React from 'react';
import Images from '../Images';
import {withRouter} from 'react-router-dom';


 const Computers = props =>{
  return(
    <Images pics = {props.pics} />
  )
}

export default withRouter(Computers);
