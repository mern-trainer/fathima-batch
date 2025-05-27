import { useParams } from "react-router"

const DynamicPath = () => {

    const { id } = useParams()


    return <div>
        <h1>Dynamic Path: {id}</h1>
    </div>
}

export default DynamicPath