import React from 'react';
import './App.css';
import {useSelector} from "react-redux";

function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button>+</button>
      <button>-</button>
      {isLogged ? <h3>Valuable information user shouldn't see if not logged in</h3> : ''}
    </div>
  );
}

export default App;
