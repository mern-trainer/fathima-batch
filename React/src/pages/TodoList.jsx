import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import { toast } from "react-toastify"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleAddTask = () => {
        if (todo == "") {
            return toast.error("Please enter a task")
        }
        if(todoList.includes(todo)){
           return toast.error("Task already exists.") 
        }
        setTodoList([todo, ...todoList])
        setTodo("")
    }

    const handleDelete = (index) => {
        const res = todoList.filter((_, idx) => index != idx)
        setTodoList(res)
    }

    return <div className="d-flex flex-column align-items-center">
        <h1>Todo List</h1>
        <div className="d-flex w-100" style={{maxWidth: "500px"}}>
            <input onChange={(e) => { // controlled 
                setTodo(e.target.value)
            }} value={todo} type="text" placeholder="Enter Task..." name="todo" className="w-100 p-2 outline-none border border-secondary" />
            <button onClick={handleAddTask} className="btn btn-secondary text-nowrap rounded-0">Add Task</button>
        </div>
        <div className="w-100 mt-2 d-flex flex-column gap-2" style={{maxWidth: "500px"}}>
            {
                todoList.map((item, index) => {
                    return <div key={index} className="p-2 border d-flex justify-content-between align-items-center border-2 border-secondary w-100">
                        <div>{item}</div>
                        <button onClick={() => handleDelete(index)} className="btn text-danger"><FaTrash /></button>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoList