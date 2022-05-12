import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import TodoListTitle from "./TodoListTitle"
// import TimeSpent from "./TimeSpent"
import TodoItem from "./TodoItem" 
import BorderComponent from './BorderComponent';

function App() {
  const [todo, setTodo] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [descriptionState, setDescription] = useState("")
  const [deadlineState, setDeadline] = useState("")
  const APIUrl = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
  const fetchAPI = useCallback(() => {
    return fetch(APIUrl)
      .then(response => response.json())
      .then((todos) => {
        setTodo(todos, todos.done = false);
      setIsLoaded(true)
    })
  }, [])
  const descriptionEventHandler = (event) => {
    setDescription(event.target.value)
  }
  const deadlineEventHandler = (event) => {
    setDeadline(event.target.value)
  }
  const addTodo = () => {
    const newId = todo.length === 0 ? 1 : todo[todo.length-1].id + 1
    const newTodo = { id: newId, description: descriptionState, deadline: deadlineState, done: false}
    setTodo(prevTodos => {
        return [...prevTodos, newTodo]
    })
  }
  useEffect(() => {
      fetchAPI()
  }, [fetchAPI])
  if(isLoaded) return (
    <div className="App">
      <BorderComponent color="blue">
      <TodoListTitle />
      {/* <TimeSpent /> */}
      Todo description
      <input type={"text"} value={descriptionState} onChange={descriptionEventHandler}></input> <br />
      deadline
      <input type={"date"} value={deadlineState} onChange={deadlineEventHandler} ></input> <br />
        <button onClick={addTodo}>Add Todo</button>
        {todo.length === 0 ? "No items..." : (
            <ul>
                {todo.map(todos => {
                    return <TodoItem
                      description={todos.description}
                      deadline={todos.deadline}
                      done={todos.done}
                      key={todos.id}
                      id={todos.id}
                      setTodo={setTodo} />
                })}
          </ul>)}
      </BorderComponent>
    </div>
  );
}

export default App;
