import React, { useState } from "react";
import './App.css';
import BorderComponent from "./BorderComponent";

export default function TodoItem(props) {
    const [done, setDone] = useState(props.done)
    const [editing, setEditing] = useState(false)
    const [descriptionState, setDescription] = useState(props.description)
    const handleChange = () => {
        setDone(prevdone => {
            return !prevdone
        })
    }
    const deleteTodo = () => {
        props.setTodo((prevItem) => {
            return prevItem.filter(item => item.id !== props.id)
        })
    }
    const editTodo = () => {
        setEditing(true)
    }
    const updateTodo = () => {
        props.setTodo((prevItem) => {
            return prevItem.map(item => {
                if (item.id === props.id) {
                    // 👇️ change value of description property
                    return { ...item, description: descriptionState };
                }
                return item
            })
        })
        setEditing(false)
    }
    const descriptionEventHandler = (event) => {
        setDescription(event.target.value)
      }
    return (
        <li className="App">
            <BorderComponent color="blue">
                <h3>
                    *
                    {editing ? (
                        <input type={"text"} value={descriptionState} onChange={descriptionEventHandler} />
                    ) : (
                        <span style={done ? { textDecorationLine: 'line-through' } : {}}>
                            {props.description} | 
                            { props.deadline }
                        </span>
                    )}
                    <input type="checkbox" checked={done} onChange={handleChange} />
                
                    <button onClick={deleteTodo}> Delete </button>
                    {editing ? (
                        <button onClick={updateTodo}> Update </button>
                    ) : (
                        <button onClick={editTodo}> Edit </button>
                    )}
                    </h3>
            </BorderComponent>
        </li>
    )
}