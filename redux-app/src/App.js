// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Heloo Vic</h1>
      <h2>Remaining {counter}</h2>
      <button onClick={()=>{dispatch(increment(5))}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>

      {isLogged ? <h3> log in to see info</h3> : ''}
      
    </div>
  );
};

export default App;
