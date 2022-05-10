import React, { useState } from "react";
import ReactDOM from "react-dom";

const initTodos = [
  {
    id: 1,
    text: "clean room",
  },
  {
    id: 2,
    text: "do pushups",
  },
];

export default function TodoList() {
  const [todosState, setTodosState] = useState(initTodos);

  const addTodo = () => {
    const newId = todosState.length === 0 ? 1 : todosState.length + 1
    const newTodo = { id: newId, text: "learn React" };
    setTodosState(prevTodos => {
      return [...prevTodos, newTodo];
    });
  };

  const todoItems = todosState.map((todo) => (
    <TodoItem id={todo.id} text={todo.text}></TodoItem>
  ));

  return (
    <div className="App">
      <button onClick={addTodo}>Add todo</button>
      {todoItems}
    </div>
  );
}

function TodoItem(props) {
  return (
    <li>{props.id}{props.text}</li>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
