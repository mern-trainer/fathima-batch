import { BrowserRouter, Route, Routes } from "react-router"
import TodoList from "./pages/TodoList"
import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"
import Dynamic from "./pages/Dynamic"
import ProductListing from "./pages/ProductListing"
import CartList from "./pages/CartList"
import EffectPage from "./pages/Effect"
import Form from "./pages/Form"
import Formik from "./pages/Formik"
import ReduxPage from "./pages/Redux"
import UseEffectPage from "./pages/UseEffect"

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

        {/* useParams(),  useNavigate() */}

        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
                <Route path="useeffect" Component={UseEffectPage} />
                <Route path="products" Component={ProductListing} />
                <Route path="effect" Component={EffectPage} />
                <Route path="form" Component={Form} />
                <Route path="formik" Component={Formik} />
                <Route path="redux" Component={ReduxPage} />
                <Route path="cart" Component={CartList} />
                <Route path="dynamic">
                    <Route path=":random_id?" Component={Dynamic} />
                </Route>
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