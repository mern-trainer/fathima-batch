// useEffect -> Hook

import { useEffect, useState } from "react"

// Life cycle -> create -> dom removed

// 3 stage -> Mounting, Updating, Unmounting

// Mounting -> Called while the initial render of the component
// Updating -> Called when the component is updated
// Unmounting -> Called when the component is removed from the DOM

const EffectPage = () => {

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)

    // // Mounting
    // useEffect(() => {
    //     console.log(counter);
    // }, [])

    // Updating
    // useEffect(() => {
    //     console.log(counter);
    // }, [counter])

    // Unmounting
    // useEffect(() => {
    //     console.log(timer);
    //     return () => {
    //         console.log("Unmounting...");
    //     }
    // }, [timer])

    // example

    useEffect(() => {
        const timer = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        }, 1000) // time in ms
        return () => {
            clearInterval(timer)
        }
    }, [counter])

    return <div>
        <h1>Effect Page</h1>
        <div>{counter} - {timer}</div>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <button onClick={() => setTimer(timer + 1)}>Timer</button>
    </div>
}

export default EffectPage