import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

// state.counter is grabbing the 'counter' reducer
// in /reducers/index.js
const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter); 

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={() => dispatch(increment(1))}>+</button>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            <br />
            <h1>{counter}</h1>
        </div>
    );
};

export default Counter;
