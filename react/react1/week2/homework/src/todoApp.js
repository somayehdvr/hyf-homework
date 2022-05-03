import React, {useState} from "react";
import todoList from "./todo"
import { ListTitle } from "./todoListTitle"
import './todoApp.css';

export function TodoItem(props) {
    const [done, setDone] = useState(props.done)
    const [deletedState, setDeletedState] = useState(false)
    const handleChange = () => {
        setDone(prevdone => {
            return !prevdone
        })
    }
    
    if (deletedState) {
        if (todoList.length === 0) {
            return "No items..."
        }
    }
    else return (
        <li className="todoApp">
            <h3>
                *
                <span style={done ? { textDecorationLine: 'line-through' } : {}}>
                    {deletedState ? "" : props.description}
                </span>
                <input type="checkbox" checked={done} onChange={handleChange}></input>
                <button onClick={() => {
                    todoList.filter(item => item.id !== props.id)
                    setDeletedState(true)
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
            <button onClick={addTodo}>Add Todo</button>
            <ListTitle />
            <ul>
                {todoState.map(todo => {
                    return <TodoItem
                        description={todo.description}
                        done={todo.done}
                        key={todo.id} />
                })}
            </ul>
        </div>
    ) 
  }