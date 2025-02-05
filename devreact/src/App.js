import React from 'react';
import './App.css';
//importing components
import Nav from './components/nav';
import Tweets from './components/Tweets';

function App() {
  const name = "Victor";
  return (
    <div className="App">
      <h1>Hello guys</h1>
      <div className="home">
      <Nav/>
      <Tweets me = {name}/>
      </div>
      
    </div>
  );
}

export default App;
