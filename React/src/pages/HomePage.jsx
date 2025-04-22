import { Fragment, useState } from "react"

// states -> An object that holds the data of a component
// Hooks -> functions that let you use state and other React features without writing a class.
// useState -> a Hook that lets you add React state to function components

// React State Management

// const counters = {
//     one: 0,
//     two: 0
// }

const HomePage = () => {

    // let age = 10
    const [counter, setCounter] = useState(0) // counter 1
    const [counter2, setCounter2] = useState(0) // counter 2

    const [counters, setCounters] = useState({
        one: 0,
        two: 0
    })

    // console.log(array); 

    const handleClick = () => {
        // age = age + 1
        // console.log(age)
        // const updateValue = array[1] // setState function
        // const value = array[0]
        // updateValue(value + 1) // setState function
        // setCounter(counter + 1) // setState function
        // setCounter2(counter2 + 1) // setState function
    }

    const handleClickOnePlus = () => {
        setCounters({ ...counters, one: counters.one + 1 });
    }

    const handleClickOneMinus = () => {
        setCounters({ ...counters, one: counters.one - 1 });
    }

    const handleClickTwoPlus = () => {
        setCounters({ ...counters, two: counters.two + 1 });
    }

    const handleClickTwoMinus = () => {
        setCounters({ ...counters, two: counters.two - 1 });
    }

    return <div className="d-flex gap-4 mt-4 flex-column align-items-center">
        {/* {age} */}
        <div className="fw-bold">Counter One: {counters.one}</div>
        <div className="fw-bold">Counter Two: {counters.two}</div>
        <div className="d-flex gap-2">
            <button className="btn btn-success " onClick={handleClickOnePlus}>Increment 1</button>
            <button className="btn btn-danger" onClick={handleClickOneMinus}>Decrement 1</button>
        </div> 
        <div className="d-flex gap-2">
            <button className="btn btn-success " onClick={handleClickTwoPlus}>Increment 2</button>
            <button className="btn btn-danger" onClick={handleClickTwoMinus}>Decrement 2</button>
        </div> 
    </div>
}

export default HomePage