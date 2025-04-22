import { Fragment, useState } from "react"

// states -> An object that holds the data of a component
// Hooks -> functions that let you use state and other React features without writing a class.
// useState -> a Hook that lets you add React state to function components

// React State Management

const HomePage = () => {

    // let age = 10
    const [counter, setCounter] = useState(10) // counter

    // console.log(array); 

    const handleClick = () => {
        // age = age + 1
        // console.log(age)
        // const updateValue = array[1] // setState function
        // const value = array[0]
        // updateValue(value + 1) // setState function
        setCounter(counter + 1) // setState function
    }

    return <div className="d-flex gap-4 mt-4 flex-column align-items-center">
        {/* {age} */}
        <div className="fw-bold">{counter}</div>
        <button className="btn btn-success w-25" onClick={handleClick}>Increment</button> 
    </div>
}

export default HomePage