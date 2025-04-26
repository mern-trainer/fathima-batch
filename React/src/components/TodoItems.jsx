import { useState } from "react";
import { FaTrash } from "react-icons/fa"

const TodoItem = ({ item, index, setTodoList }) => {
    const [counter, setCounter] = useState(0)
    const handleDelete = () => {
        setTodoList(todoList => todoList.filter((_, idx) => index != idx))
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter => counter + 1)
        // setCounter(state => state + 1)
        // setCounter(state => state + 1)
        // setCounter(state => state + 1)
        // setCounter(state => state + 1)
    }
    return <div className="p-2 border d-flex justify-content-between align-items-center border-2 border-secondary w-100">
        <div>{item}</div>
        {counter}
        <button onClick={handleDelete} className="btn text-danger"><FaTrash /></button>
    </div>
}

export default TodoItem