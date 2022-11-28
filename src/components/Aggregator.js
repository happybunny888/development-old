import { useState } from "react";

/* ############################################################## */
let setCartOutside
let cartOutside

function addToCart(e, item) {
  //alert(" You clicked add " + item.name + " , price is " + item.price);
  e.preventDefault();

  setCartOutside((cartOutside) => {
    const existingIdx = cartOutside.findIndex((i) => i.name === item.name);
    if (existingIdx !== -1) {
      return [
        ...cartOutside.slice(0, existingIdx),
        { ...cartOutside[existingIdx], count: cartOutside[existingIdx].count + 1 },
        ...cartOutside.slice(existingIdx + 1),
      ];
    }
    return [...cartOutside, { ...item, count: 1 }];
  });
  console.log(cartOutside);
}

function removeFromCart(e, item) {
  //alert(" You clicked remove " + item.name + " , price is " + item.price);
  e.preventDefault();

  setCartOutside((cartOutside) => {
    const existingIdx = cartOutside.findIndex((i) => i.name === item.name);
    
    if (existingIdx !== -1 && cartOutside[existingIdx].count >1 ){ //if item exists in cart 
      return [
        ...cartOutside.slice(0, existingIdx),
        { ...cartOutside[existingIdx], count: cartOutside[existingIdx].count - 1 },
        ...cartOutside.slice(existingIdx + 1),
      ];
    }
    if (existingIdx !== -1 && cartOutside[existingIdx].count >0 ){ //if item exists in cart 
      return [
        ...cartOutside.slice(0, existingIdx), ...cartOutside.slice(existingIdx + 1),
      ];
    } 
    return [...cartOutside];
  });
  console.log(cartOutside);
}

function Aggregator() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);
  setCartOutside = setCart
  cartOutside = cart
 
  return (
    <div className="Aggregator">
        <div className="aggregator-window" style={{ width: 300, display: "inline-block"}}>
          <div className="title-bar">
            <div className="shopping-cart-text">Shopping Cart</div>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={() => setCart([])}></button>
              </div>
            </div>
            <ul className="aggregator-window-body tree-view">
              {cart.map((item, index) => (
                <li>
                  <b>{item.name}</b> &#xd7;{item.count}
                  <span style={{ float: 'right' }}>
                    Price: ${(item.price * item.count).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          <div className="status-bar">
            <p className="status-bar-field">{cart.length === 0 ? `Your cart is empty!` : `${cart.length} item${cart.length === 1 ? '' : 's'}`}</p>
            <p className="status-bar-field" style={{textAlign: 'right'}}>Total: <b>${cart
            .reduce((subtotal, item) => subtotal + item.count * item.price, 0)
            .toFixed(2)}</b></p>
          </div>
       
      </div>
      


    </div>
  );
            
}

export default Aggregator;
export {addToCart, removeFromCart};