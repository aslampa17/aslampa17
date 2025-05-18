import { Link } from "react-router-dom"
import profilePic from "./assets/propic.jpg"

function Navbar(){

    return(
        <div className="navbar">
            <div className="logo">
                <img src={profilePic} alt="" />
                P A Aslam Mohammed
            </div>
            <ul className="nav-links">
                <li><Link to="/aslampa17">Home</Link></li>
                <li><Link to="/aslampa17/projects">Projects</Link></li>
                <li><Link to="/aslampa17/about">About</Link></li>
                <li><Link to="/aslampa17/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;