const ComponentB = ({ counter, setCounter }) => {
    return <div>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        Component B - {counter}
    </div>
}

export default ComponentB