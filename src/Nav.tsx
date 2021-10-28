import { NavLink } from "react-router-dom";

/**
 * Creates nav links for home & upload page
 * 
 * State: none
 * Props: none
 * 
 * App -> Nav
 */
function Nav() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/upload">Upload</NavLink>
        </div>
    )
}

export default Nav;