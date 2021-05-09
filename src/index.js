import React from 'react';
import ReactDOM from 'react-dom';
import ListViewContainer from "./components/ListViewContainer.js";
import "./stylesheets/style.css";
import Greeting from "./components/Greeting.js"
import AddCountryContainer from "./components/AddCountryContainer.js"

ReactDOM.render(
  <React.StrictMode>
  <Greeting/>
  <AddCountryContainer/>
  <ListViewContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
