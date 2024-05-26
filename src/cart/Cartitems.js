import React, { useState, useEffect } from 'react';
import './Cartitem.css'

const CartItem = (props) => {
  const [price, setPrice] = useState(props.price);

  useEffect(() => {
    const calculatePrice = props.price * props.amount;
    setPrice(calculatePrice);
  }, [props.price, props.amount]);

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.title}</h2>
        <div className='summary'>
          <span className='price'>${price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='action'>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;

