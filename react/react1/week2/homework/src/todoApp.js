import React, {useState} from "react";
import todoList from "./todo"
import TodoListTitle from "./TodoListTitle"
import TimeSpent from "./TimeSpent"
import TodoItem from "./TodoItem" 
import './todoApp.css';



export default function TodoApp() {
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
            <TodoListTitle />
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