import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import "./Header.css"

const Header = () => {
    return <div className="header-container bg-primary">
        <div>
            <img src="https://www.7up.com/images/7up-logo-large.png" alt="7up" height={80}/>
        </div>
        <div className="right">
            <div className="links">
                <ul>
                    <li>PRODUCTS</li>
                    <li>RECIPES</li>
                    <li>STORES</li>
                </ul>
            </div>
            <div>
                <FaFacebook />
                <FaInstagram />
                <FaTiktok />
            </div>
        </div>
    </div>
}

export default Header