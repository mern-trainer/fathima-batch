import ComponentB from "./ComponentB"

const ComponentA = () => { // parent
    return <div>
        Component A
        <ComponentB data="Data from Component A" name="Fathima" age={20} /> {/* child */}
    </div>
}

export default ComponentA