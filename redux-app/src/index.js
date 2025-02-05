import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//redux
// import { createStore } from 'redux';

// //store => globalized state


// //Action
// const incriment = () => {
//   return{
//     type: 'INCRIMENT'
//   }
// }
// const decriment = () => {
//   return{
//     type: 'DECRIMENT'
//   }
// }
// //Reducer
// const counter = (state = 0, Action) =>{
//   switch (Action.type) {
//     case 'INCRIMENT':
//       return state + 1;

//     case 'DECRIMENT':
//       return state - 1;
  
//   }
// };

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState())
// );
// //dispatch
// store.dispatch(incriment());
// store.dispatch(incriment());
// store.dispatch(incriment());
// store.dispatch(decriment());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>
  // <React.StrictMode>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
