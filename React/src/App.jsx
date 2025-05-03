import { BrowserRouter, Route, Routes } from "react-router"
import TodoList from "./pages/TodoList"
import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"

const App = () => {
    return <BrowserRouter>
        {/* <Routes>
            <Route path="/todo" Component={TodoList} />
            <Route path="/" Component={HomePage} />
            <Route path="/user" element={<div>USER PAGE</div>} />
            <Route path="/user/settings" element={<div>USER SETTINGS</div>} />
            <Route path="/user/profile" element={<div>USER PROFILE</div>} />
            <Route path="*" Component={Error404} />
        </Routes> */}

        {/* Nested Routes */}

        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
                <Route path="todo" Component={TodoList} />
                <Route path="user">
                    <Route path="" element={<div>USER PAGE</div>} />
                    <Route path="settings" element={<div>USER SETTINGS</div>} />
                    <Route path="profile" element={<div>USER PROFILE</div>} />
                </Route>
                <Route path="*" Component={Error404} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App