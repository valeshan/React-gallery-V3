import React from 'react';
import Image from './Image';
import Notfound from './Notfound';

const Images = props =>{
    let imageList;
    if (props.pics.length === 0){
      imageList = <Notfound />
    } else{
      imageList = props.pics.map((pic)=>{
        return <Image key= {pic.id} pic = {pic} />
      })
    }

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
