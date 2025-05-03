import { useState } from "react"
import { toast } from "react-toastify"
import TodoItem from "../components/TodoItems"
import Navbar from "../components/NavBar"

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
        <Navbar/>
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
                    return <TodoItem key={index} index={index} item={item} setTodoList={setTodoList}/>
                })
            }
        </div>
    </div>
}

export default TodoList