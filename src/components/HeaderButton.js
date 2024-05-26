import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './HeaderButton.css';

function HeaderButton(props) {
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    if (Array.isArray(props.arr2)) {
      let amount = 0;
      let i = 0;

      while (i < props.arr2.length) {
        amount += parseInt(props.arr2[i].amount) ;
        i++;
      }

      setNumberOfItems(amount);
    }
  }, [props.arr2]);

  return (
    <div>
      {localStorage.getItem('authToken') && (
        <button className="button" onClick={props.click}>
          <span className="icon">
            <Cart />
          </span>
          <span>Your Cart</span>
          <span className="badge">{numberOfItems}</span>
        </button>
      )}
    </div>
  );
}

export default HeaderButton;
