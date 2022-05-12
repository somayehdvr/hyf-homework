import React, { useState } from "react";
import './App.css';
import BorderComponent from "./BorderComponent";

export default function TodoItem(props) {
    const [done, setDone] = useState(props.done)
    const handleChange = () => {
        setDone(prevdone => {
            return !prevdone
        })
    }
    
    return (
        <li className="App">
            <BorderComponent color="blue">
            <h3>
                *
                <span style={done ? { textDecorationLine: 'line-through' } : {}}>
                        {props.description} | 
                        {props.deadline}
                </span>
                <input type="checkbox" checked={done} onChange={handleChange}></input>
               
                <button onClick={() => {
                    props.setTodo((prevItem) => {
                        return prevItem.filter(item => item.id !== props.id)
                    })
                }}>
                    Delete
                </button>
                </h3>
                </BorderComponent>
        </li>
    )
}