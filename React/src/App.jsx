import { BrowserRouter, Route, Routes } from "react-router"
import TodoList from "./pages/TodoList"
import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/todo" Component={TodoList} />
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={Error404} />
        </Routes>
    </BrowserRouter>
}

export default App