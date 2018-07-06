import React from 'react';
import Image from './Image';

const Images = props =>{
    const imageList = props.pics.map((pic)=>{

      return <Image key= {pic.id} pic = {pic} />
    })
    return (
      <ul>
      {imageList}
      </ul>
    )
}

export default Images;
