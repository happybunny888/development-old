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

      <div className="Aggregator">
        <Aggregator></Aggregator>
      </div>
    </div>
  );
}

export default App;

