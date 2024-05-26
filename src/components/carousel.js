import React,{useState} from 'react'
import './carousel.css'
import Leftarrow from './leftarrow';
import Rightarrows from './rightarrows';
export default function Carousel(props) {
 

  console.log(props.count)

  return (
   
    <div className='parent'>
    <div className='carousel'>


    
      
      {props.slides.map((pic,index)=>{

        return <img src={pic.src} alt={pic.alt} key={index} className={props.count === index  ? "slide":"slide-hidden"} />
       
      })}

  </div>
    </div>
  );
}
