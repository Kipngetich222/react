import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {
    useEffect(()=>{
        fetchItems();
    },[]);
    const fetchItems = async ()=> {
        const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get");
        console.log(data);
        
    }

  return (
    <div className="App">
      <h1>Shop page</h1>
    </div>
  );
}

export default Shop;
