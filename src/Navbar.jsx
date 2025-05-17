import { Link } from "react-router-dom"

function Navbar(){

    return(
        <div className="navbar">
            <ul className="nav-links">
                <li><Link to="/aslampa17">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;