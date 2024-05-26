import React, { useState ,useEffect } from 'react'
import CartItem from './Cartitems'
import './Cartstate.css'

function Cartstate(props) {

    const [price,setPrice]=useState()

    console.log("props")
   console.log(props.item)

   const handleCheckout = async (req, res) => {
    let userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
        console.error("User email not found in localStorage");
        return; // Stop further execution if userEmail is not available
    }

    console.log("User Email:", userEmail);
    console.log("Cart Items:", props.item);

    try {
        const response = await fetch("http://localhost:5000/api/orderfood", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                order_data: props.item,
                order_date: new Date().toDateString()
            })
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.success) {
            alert("Your order is going to be placed");
        } else {
            console.error("Order not successful:", data);
            // Handle other cases where order might not be successful
        }
    } catch (error) {
        console.error("Error during order checkout:", error);
        // Handle errors that occur during the API request
    }
};
  

useEffect(()=>{
    let priceCal=0;
    let i=0;
    while(i<props.item.length){
        priceCal += props.item[i].price * parseInt( props.item[i].amount)
         const type=  parseInt( props.item[i].amount)
             console.log(typeof(type))
        i++ ;
    }
    setPrice(priceCal)
},[props.item])
  

  return (
    <div className='main-div'>
           <ul className='cart-items'>
      {props.item.map((items)=>(
            <CartItem  title={items.name} price={items.price} amount={items.amount}/>
     ) )}
      </ul>

      <div className='total'>
        <span>Total amount</span>
        <span>${price}</span>
      </div>
         <div className='actions'>
            <button className='cancel-btn' onClick={props.cancel}>Cancel</button>
            <button className='order-btn' onClick={handleCheckout}>Order</button>
         </div>
    </div>
  )
}

export default Cartstate

