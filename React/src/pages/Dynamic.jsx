import { useNavigate, useParams } from "react-router"

const Dynamic = () => {

    const { random_id } = useParams()
    const navigate = useNavigate()
    const is_authenticated = true;

    const handleNavigate = () => {
        if (!is_authenticated) {
            return alert("Invalid User")
        }
        const randomNumber = Math.random()
        navigate(`/dynamic/${randomNumber}`)
    }

    return <div>
        Dynamic -- {random_id || "NO ID"}

        <button onClick={handleNavigate}>Generate Random Number</button>
    </div>
}

export default Dynamic