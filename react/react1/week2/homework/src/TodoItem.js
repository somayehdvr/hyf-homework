import React, { useState } from "react";
import './todoApp.css';

export default function TodoItem(props) {
    const [done, setDone] = useState(props.done)
    const handleChange = () => {
        setDone(prevdone => {
            return !prevdone
        })
    }
    
    return (
        <li className="todoApp">
            <h3>
                *
                <span style={done ? { textDecorationLine: 'line-through' } : {}}>
                    {props.description}
                </span>
                <input type="checkbox" checked={done} onChange={handleChange}></input>
               
                <button onClick={() => {
                    props.setTodoState((prevItem) => {
                        return prevItem.filter(item => item.id !== props.id)
                    })
                }}>
                    Delete
                </button>
            </h3>
        </li>
    )
}