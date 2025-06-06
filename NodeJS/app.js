const http = require("http");
const url = require("url");

const server = http.createServer();

let todoList = [];

server.on("request", (request, response) => {
    // const path = request.url;
    // const res = url.parse(path, true)
    // if (res.pathname == "/") {
    //     response.writeHead(200, {
    //         "content-type": "application/json"
    //     })
    //     response.end(JSON.stringify({
    //         name: "John",
    //         age: 30,
    //         q: res.query.q,
    //         day: res.query.day
    //     }))
    // }
    const { query, pathname: path } = url.parse(request.url, true)
    const method = request.method;
    // GET, POST, PUT, DELETE, PATCH
    if (path == "/todo" && method == "POST") {
        const { title } = query;
        if (!title) {
            response.writeHead(400, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Title is required"
            }))
        }
        response.writeHead(201, {
            "content-type": "application/json"
        })
        const taskObj = {
            id: crypto.randomUUID(),
            title,
            is_completed: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
        todoList.push(taskObj)
        return response.end(JSON.stringify({
            message: "Task created successfully",
            created: taskObj
        }))
    }

    if (path == "/todo" && method == "GET") {
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({
            message: "Todo list",
            data: todoList
        }))
    }

    if (path == "/todo" && method == "DELETE") {
        const { id } = query;
        if(!id){
            response.writeHead(400, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Id is required"
            }))
        }
        const task = todoList.find(task => task.id == id)
        if(!task){
            response.writeHead(404, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Task not found"
            }))
        }
        todoList = todoList.filter(task => task.id != id)
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({
            message: "Task deleted successfully",
            deleted: task
        }))
    }

    if(path == "/todo" && method == "PATCH"){
        const { id, title, is_completed } = query;
        if(!id){
            response.writeHead(400, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Id is required"
            }))
        }
        const taskIndex = todoList.findIndex(task => task.id == id)
        if(taskIndex == -1){
            response.writeHead(404, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Task not found"
            }))
        }
        const task = todoList[taskIndex];
        if (title) {
            task.title = title;
        }
        task.is_completed = is_completed ? true : false;
        task.updated_at = new Date().toISOString()
        todoList[taskIndex] = task;
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({
            message: "Task updated successfully",
            updated: task
        }))
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});