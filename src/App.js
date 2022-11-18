import "./App.css";
import { useState } from "react";
import TicketData from "./assets/ticket-data.json";
import TicketItem from "./components/TicketItem.js";
import Aggregator from "./components/Aggregator.js";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
TicketData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  //const [count, setCount] = useState([])
  function addToCart(e, item) {
    alert(" You clicked add " + item.name + "  price is " + item.price);
    //setCount(cart.append(name, price));
    //if (cart.indexOf(currentCart) !== -1) return;
    e.preventDefault();
    //if (cart.indexOf(currentCart) !== -1) return;

    setCart((cart) => {
      const existingIdx = cart.findIndex((i) => i.name === item.name);
      if (existingIdx !== -1) {
        return [
          ...cart.slice(0, existingIdx),
          { ...cart[existingIdx], count: cart[existingIdx].count + 1 },
          ...cart.slice(existingIdx + 1),
        ];
      }
      return [...cart, { ...item, count: 1 }];
    });
    //console.log(cart);
  }
  function removeFromCart(e, item) {
    alert(" You clicked remove " + item.name + " , price is " + item.price);
    e.preventDefault();

    setCart((cart) => {
      const existingIdx = cart.findIndex((i) => i.name === item.name);
      
      if (existingIdx !== -1 && cart[existingIdx].count >1 ){ /*if item exists in cart*/ 
        return [
          ...cart.slice(0, existingIdx),
          { ...cart[existingIdx], count: cart[existingIdx].count - 1 },
          ...cart.slice(existingIdx + 1),
        ];
      }
      if (existingIdx !== -1 && cart[existingIdx].count >0 ){ /*if item exists in cart*/ 
        return [
          ...cart.slice(0, existingIdx), ...cart.slice(existingIdx + 1),
        ];
      } 
      return [...cart];
    });
    //console.log(cart);
  }

  return (
    <div className="App">
      <div
        style={{ display: "flex", flexDirection: "column", margin: "1.5rem", position: 'fixed' }}
      >
        <div className="window" style={{ width: 300, display: "inline-block" }}>
          <div className="title-bar">
            <div className="title-bar-text">Ticker's Tickets! | Cart</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={() => setCart([])}></button>
            </div>
          </div>
          <ul className="window-body tree-view" style={{height: 240}}>
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

      <div className="bakery-items">
        {TicketData.map(
          (
            item,
            index // TODO: map bakeryData to BakeryItem components
          ) => (
            <TicketItem item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;

