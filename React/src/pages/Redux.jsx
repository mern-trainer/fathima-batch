// Redux -> A JS library for predictable and maintainable global state management

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../Redux/counter.slice"

//  user, cart, products, orders, etc. (slices)

const ReduxPage = () => {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return <div className="d-flex flex-column align-items-center mt-3">
        <div>{count}</div>
        <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary" onClick={() => dispatch(increment(10))}>Increment</button>
            <button className="btn btn-secondary" onClick={() => dispatch(reset())}>Reset</button>
            <button className="btn btn-danger" onClick={() => dispatch(decrement(5))}>Decrement</button>
        </div>
    </div>
}

export default ReduxPage