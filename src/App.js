import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions/counterAction";
import {logging} from "./actions/logginAction";

function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(logging())}>LOGIN</button>
      {isLogged ? <h3>Valuable information user shouldn't see if not logged in</h3> :
        <h3>You are not logged in</h3>}
    </div>
  );
}

export default App;
