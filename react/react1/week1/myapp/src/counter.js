import React, { useState } from "react";

export function Counter() {
    const [counterState, setCounterState] = useState(0);
    const [counterState2, setCounterState2] = useState(0);
  
    return (
        <div>
            {counterState}<br />
            <button onClick={() => { setCounterState(counterState + 1) }} > increment</button>;
            <button onClick={() => { setCounterState(0) }} > reset</button>
            <button onClick={() => { setCounterState(counterState - 1) }} > decrement</button><br />

            {counterState2}<br />
            <button onClick={() => { setCounterState2(counterState2 + 1) }} > increment</button>;
            <button onClick={() => { setCounterState2(0) }} > reset</button>
            <button onClick={() => { setCounterState2(counterState2 - 1) }} > decrement</button>
        </div>
    ) 
  }