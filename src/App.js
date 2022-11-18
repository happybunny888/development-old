import "./App.css";
//import { useState } from "react";
import TicketData from "./assets/ticket-data.json";
//import TicketItem from "./components/TicketItem.js";
import Aggregator from "./components/Aggregator.js";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
TicketData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  

  return (
    <div className="App">

      <div className="Aggregator">
        <Aggregator></Aggregator>
      </div>
    </div>
  );
}

export default App;

