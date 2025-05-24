// useEffect -> Hook -> Component Life Cycles
// load, chanage, unload
// 3 stages -> Mounting, Updating, Unmounting

// Mounting -> Called when the component is first rendered
// Updating -> Called when the component is updated
// Unmounting -> Called before the component is removed from the DOM

import { useEffect, useState } from "react"

const UseEffectPage = () => {

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)
    const [users, setUsers] = useState([]) // array of users

    // useEffect(() => {
    //     console.log("Mounting"); // api calling
    // }, [])

    // useEffect(() => {
    //     console.log(counter); // updating
    // }, [counter, timer])

    // useEffect(() => {
    //     console.log(counter)
    //     return () => { // clean up function
    //         console.log("Unmounting");
    //     }
    // }, [counter])

    const getUsers = async () => {
        try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const response = await fetch("https://dummyjson.com/users")
            const res = await response.json()
            setUsers(res.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return <div className="container-fluid">
        {/* <button onClick={() => setCounter(counter + 1)}>Update Count - {counter}</button>
        <button onClick={() => setTimer(timer + 1)}>Update Timer - {timer}</button> */}
        <div className="row">
            {
                users.map(user => {
                    return <div key={user.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 align-items-center d-flex">
                        <img src={user.image} alt={user.firstName} width={70} height={70}/>
                        <div>
                            <h5>{user.firstName} {user.lastName}</h5>
                            <p>{user.email}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default UseEffectPage