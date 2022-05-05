import React, {useState} from "react";
import todoList from "./todo"
import { ListTitle } from "./todoListTitle"
import { TimeSpent } from "./TimeSpent"
import './todoApp.css';

export function TodoItem(props) {
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

export function ToDo() {
    const [todoState, setTodoState] = useState(todoList)

    const addTodo = () => {
        const newId = todoState.length === 0 ? 1 : todoState[todoState.length-1].id + 1
        const newTodo = { id: newId, description: "random text", done: false}
        setTodoState(prevTodos => {
            return [...prevTodos, newTodo]
        })
    }

    return (
        <div>
            <ListTitle />
            <TimeSpent />
            <button onClick={addTodo}>Add Todo</button>
            {todoState.length === 0 ? "No items..." : (
                <ul>
                    {todoState.map(todo => {
                        return <TodoItem
                            description={todo.description}
                            done={todo.done}
                            key={todo.id}
                            id={todo.id}
                            setTodoState={setTodoState} />
                    })}
                </ul>)}
        </div>
    ) 
  }