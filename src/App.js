import "./App.css";
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import { useState } from "react";
import TicketData from "./assets/ticket-data.json";
//import TicketItem from "./components/TicketItem.js";
import Aggregator from "./components/Aggregator.js";
//import {addToCart, removeFromCart} from "./components/Aggregator.js";
//import removeFromCart from "./components/Aggregator.js";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
TicketData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
/*   const [type, setType] = useState("All")
  const selectFilterType = eventKey => {
    setType(eventKey);
  };
  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(type === "All") { 
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }
  //const result = words.filter(word => word.length > 6);
  function myFilterFunction(){
    matchesFilterType
  }

  const filteredData = TicketData.filter(myFilterFunction) */


  return (
    <div className="App">
      {/* <div className="filter_bar">
      <Nav onSelect={selectFilterType}>
      <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
      </Nav>

      </div> */}
     
       <div className="Aggregator">
        <Aggregator></Aggregator>
      </div> 
    </div>
  );
}

export default App;

