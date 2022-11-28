import "./App.css";

import { useState } from "react";
import TicketData from "./assets/ticket-data.json";
import TicketItem from "./components/TicketItem.js";
import Aggregator from "./components/Aggregator.js";
import {addToCart, removeFromCart} from "./components/Aggregator.js";
import SortItems from './components/SortItems.js';
import Filter from './components/Filter.js';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
TicketData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
// for sorting
let setSortOutside
let sortingOutside
// sort filter
let setTypeOutside
let typeOutside


function selectFilterType(value, checked){
  console.log("value:"+value+",checked:"+checked);

  if(checked===true){
    setTypeOutside((typeOutside) => {
      const existingIdx = typeOutside.findIndex((i) => i === value);
      if (existingIdx === -1) {
        return [...typeOutside, value];
      }
      return [...typeOutside];
    });
  }else{
    setTypeOutside((typeOutside) => {
      const existingIdx = typeOutside.findIndex((i) => i === value);
      
      if (existingIdx !== -1){ 
        return [
          ...typeOutside.slice(0, existingIdx),
          ...typeOutside.slice(existingIdx + 1),
        ];
      }
      return [...typeOutside];
    });
  }
  console.log(typeOutside);
};


function selectSortingValue(value){
  setSortOutside(value);
  console.log(sortingOutside);
}

function resetSorting(){
  console.log("resetSorting!")
  var x = document.getElementsByClassName("sorting_radio");
  for(var i=0; i<x.length; i++) {
     x[i].checked = false;
   }  
   setSortOutside('');
}

function resetFilter(){
  console.log("resetFilter!")

  var x = document.getElementsByClassName("filter_checkbox");
   for(var i=0; i<x.length; i++) {
      x[i].checked = false;
    }   
    setTypeOutside([]);
}

function Reset() {
  resetSorting();
  resetFilter();
}

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  
  const [sorting, setSort] = useState("")
  setSortOutside = setSort
  sortingOutside = sorting


  const [type, setType] = useState([])
  setTypeOutside = setType
  typeOutside = type


  
  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    console.log("filter type:"+type)

    if(type.length === 0) {  
      return true
    } else if (type.includes(item.type)) {
      return true
    } else {
      return false
    }
  }

  const matchesSortingData = (item1, item2) => {
    console.log("sorting value:"+sorting)
    if (sorting==='Rating'){
      if (item1.rating > item2.rating){
        return 1
      }else{
        return -1
      }  
    }else if (sorting==='Price'){
      if (item1.price > item2.price){
        return 1
      }else{
        return -1
      }
    }
    return 0;  
  }




  const filteredData = TicketData.filter(matchesFilterType) 
  const sortingData = filteredData.sort(matchesSortingData)


  return (
    <div className="App">
      <div className="Side-bar">
      <h3>Ticker's Tickets</h3>
        <div className="Row">
        </div>

        <div>
          <SortItems/>
        </div>

        <br/>

        <div>
          <Filter/>
        </div>	
        <br/> 
        
        <div>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
       

      <div className="ticket-items">
        {
          sortingData.map(
            (
              item,
              index // TODO: map to ticketItem components
            ) => (
              <TicketItem  key={index} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
            )
          )}
      </div> 

      <div className="Aggregator">
        <Aggregator></Aggregator>
      </div>

      </div>
    
  );
}

export default App;
export {selectFilterType, selectSortingValue};

