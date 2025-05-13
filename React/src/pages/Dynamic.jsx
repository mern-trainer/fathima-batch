import { useParams } from "react-router"

const Dynamic = () => {

    const { random_id } = useParams()

    return <div>
        Dynamic -- {random_id || "NO ID"}
    </div>
}

export default Dynamic