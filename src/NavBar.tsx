import "./NavBar.css";
import { NavLink } from "react-router-dom";

/**
 * Creates nav links for home & upload page
 * 
 * State: none
 * Props: none
 * 
 * App -> Nav
 */
function NavBar() {
    return (
        <div className="NavBar">
            <NavLink to="/">Pixly</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            <NavLink to="/all">All</NavLink>
        </div>
    )
}

export default NavBar;