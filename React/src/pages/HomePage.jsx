import { Fragment, useState } from "react"
import Navbar from "../components/NavBar"

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
    const [passwords, setPasswords] = useState([]) // password 1
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

    // const handleClickOnePlus = () => {
    //     setCounters({ ...counters, one: counters.one + 1 });
    // }

    // const handleClickOneMinus = () => {
    //     setCounters({ ...counters, one: counters.one - 1 });
    // }

    // const handleClickTwoPlus = () => {
    //     setCounters({ ...counters, two: counters.two + 1 });
    // }

    // const handleClickTwoMinus = () => {
    //     setCounters({ ...counters, two: counters.two - 1 });
    // }


    const handleUpdate = (operator, key) => {
        // "2" == 2 // true + value only
        // "2" === 2 // false + value + type
        if (operator === "+") {
            setCounters({ ...counters, [key]: counters[key] + 1 });
        }
        if (operator === "-") {
            setCounters({ ...counters, [key]: counters[key] - 1 });
        }
    }

    const handlePasswordGenerator = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
        let pass = ""
        let i = 0
        while (i < 16) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomChar = characters[randomIndex];
            pass += randomChar;
            i++
        }
        setPasswords([pass, ...passwords])
        // console.log(Math.random() * 10);

    }

    return <div className="d-flex gap-4 mt-4 flex-column align-items-center">
        <Navbar />
        {/* {age} */}
        <div className="fw-bold">Counter One: {counters.one}</div>
        <div className="fw-bold">Counter Two: {counters.two}</div>
        <div className="d-flex gap-2">
            <button className="btn btn-success " onClick={() => handleUpdate("+", "one")}>Increment 1</button>
            <button className="btn btn-danger" onClick={() => handleUpdate("-", "one")}>Decrement 1</button>
        </div> 
        <div className="d-flex gap-2">
            <button className="btn btn-success " onClick={() => handleUpdate("+", "two")}>Increment 2</button>
            <button className="btn btn-danger" onClick={() => handleUpdate("-", "two")}>Decrement 2</button>
        </div> 

        <div className="d-flex flex-column gap-3 mt-5">
            {passwords[0]}
            <button onClick={handlePasswordGenerator}>Generate Strong Password</button>
        </div>
        <div>
            {passwords.join(", ")}
        </div>
    </div>
}

export default HomePage