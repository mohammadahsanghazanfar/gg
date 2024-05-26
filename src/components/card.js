import React from 'react'
import Orderlist from './orderlist'
import './card.css'

export default function Card(props) {


  const sendUp=(food)=>{

      props.recieving(food) 

  }


  return (
    <div className='wrapper'>
      
      {props.order.map((data) =>{

       return <Orderlist img={data.img} title={data.title} text={data.text} price={data.price} send={sendUp} />

      })}
    </div>
  )
}
