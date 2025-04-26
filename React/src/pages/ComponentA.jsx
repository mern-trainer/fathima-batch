import { useState } from "react"
import ComponentB from "./ComponentB"

const ComponentA = () => { // parent

    const [counter, setCounter] = useState(0)

    return <div>
        Component A
        
        <ComponentB counter={counter} setCounter={setCounter} /> {/* child */}
    </div>
}

export default ComponentA