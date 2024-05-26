import React,{useRef,useState} from 'react'
import './orderlist.css'

export default function Orderlist(props) {

  const h3Ref=useRef(null)
  const pRef=useRef(null)
  const selectRef=useRef(null)
  const select2Ref=useRef(null)

   const [price,setPrice]=useState(props.price)
   const [totalQuantity,setTotalQuantity]=useState(0)

  const handleUp=()=>{


    
    
    const selectedValue = parseInt(selectRef.current.value);

    // Calculate the total quantity including the current selection
    const newTotalQuantity = totalQuantity + selectedValue;

    // Calculate the new price based on the total quantity
    const newPrice = props.price * newTotalQuantity;

    // Update the state with the new total quantity and price
    setTotalQuantity(newTotalQuantity);
    setPrice(newPrice)

    const obj= {
       
      name:props.title,
      price:props.price,
      amount:selectRef.current.value,
      type:select2Ref.current.value

    }
     
    props.send(obj);
     
       
  }

  return (
    <div className='order'>
       
       <img src={props.img} className='orderimg'></img>
       <h3 >{props.title}</h3>
       <p className='text1'>{props.text}</p>
       <p className='price2'> Price:/ ${props.price} </p>
       <p className='price1'>${price}/-</p>

       <select id="mySelect" ref={selectRef}>
  <option value="1"> 1</option>
  <option value="2"> 2</option>
  <option value="3"> 3</option>
     </select>
     <select className="mySelect" ref={select2Ref}>
  <option value="regular"> regular</option>
  <option value="meal"> meal</option>
  
     </select>

     <hr /> 
     
     <button  id='butt' onClick={handleUp}> Add to Cart</button>

    
    </div>
  )
}
