import { Link } from "react-router"

const Navbar = () => {
    return <div className="d-flex justify-content-center gap-5 align-items-center" style={{height: "60px"}}>
        <Link to="/">HOME</Link>
        <Link to="/todo">TODO</Link>
        <Link to="/SDLKSJDFL">RANDOM</Link>
    </div>
}

export default Navbar