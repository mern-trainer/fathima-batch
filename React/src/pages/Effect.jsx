// useEffect -> Hook

import { useEffect, useState } from "react"

// Life cycle -> create -> dom removed

// 3 stage -> Mounting, Updating, Unmounting

// Mounting -> Called while the initial render of the component
// Updating -> Called when the component is updated
// Unmounting -> Called when the component is removed from the DOM

// API Calling -> useEffect

const EffectPage = () => {

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)
    const [users, setUsers] = useState([])

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

    const getUsers = async () => {
        try{
            const response = await fetch(`https://dummyjson.com/users`)
            const res = await response.json()
            setUsers(res.users);
            console.log(res.users);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return <div>
        <h1>Effect Page</h1>
        <div>{counter} - {timer}</div>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <button onClick={() => setTimer(timer + 1)}>Timer</button>

        <div className="d-flex gap-2 flex-wrap">
            {
                users.map(user => {
                    return <div key={user.id} className="d-flex gap-2 align-items-center p-1">
                        <div>
                            <img src={user.image} alt={user.firstName} width={40} height={40} />
                        </div>
                        <div>
                            <h5>{user.firstName} {user.lastName}</h5>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default EffectPage