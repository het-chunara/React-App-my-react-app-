// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Counter.css"

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'More' });
  };

  const decrement = () => {
    dispatch({ type: 'less' });
  }; 



  

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className='buttons'>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button></div>
    </div>
  );
};

export default Counter;
