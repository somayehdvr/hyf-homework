import React from "react";
import toDoList from "./todo.json"
import { ListTitle } from "./todoListTitle"
import './todoApp.css';

export function TodoItem(props) {
    return (
        <li className="todoApp"> {/* style={{ listStyleType: "none" }} */}
            <h3>
                * {props.title}, {props.weekday} {props.month} {props.day} {props.year} 
            </h3>
        </li>
    )
}

export function ToDo() {
    return (
        <div>
            <ListTitle />
            <ul>
                {toDoList.map(todo => {
                    return <TodoItem
                        title={todo.title}
                        weekday={todo.weekday}
                        month={todo.month}
                        day={todo.day}
                        year={todo.year}
                        key={todo.id} />
                })}
            </ul>
        </div>
    ) 
  }