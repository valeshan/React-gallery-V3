import React from 'react';
import Image from './Image';

const Images = props =>{
    const imageList = props.pics.map((pic)=>{

      return <Image key= {pic.id} pic = {pic} />
    })
    return (
      <ul className = 'photo-container'>
      {(props.loading)?
        <p>Data is loading...</p>
        :
        imageList}
      </ul>
    )
}

export default Images;
