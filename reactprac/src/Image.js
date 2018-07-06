import React from 'react';

const Image = props =>{
  return(
    <li>
    <img src =
    {`https://farm${props.pic.farm}.staticflickr.com/${props.pic.server}/${props.pic.id}_${props.pic.secret}.jpg`} alt = {`${props.pic.title}`} />
    </li>
  )

}


export default Image;
