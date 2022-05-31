import {useState} from "react";

export default function Comp(props) {
    const { todos, setTodos } = props
    const [inputValue, setInputValue] = useState()
    const handleInput = (event) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = () => {
        const newTodo = {id: todos.id, Text: inputValue, done: false}
        setTodos([...todos, newTodo])
    }
    return (
        <>
            <input type={"text"} value={inputValue} onChange={handleInput} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}