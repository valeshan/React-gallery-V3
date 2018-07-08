import React from 'react';
import Images from '../Images';
import {withRouter} from 'react-router-dom';


 const Balloons = props =>{
  return(
    <Images pics = {props.pics} />
  )
}

export default withRouter(Balloons);
