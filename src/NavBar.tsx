import { NavLink } from "react-router-dom";

/**
 * Creates nav links for home & upload page
 * 
 * State: none
 * Props: none
 * 
 * App -> NavBar
 */
function NavBar() {
    return (
        <div className="navbar navbar-dark bg-primary container-fluid">
            <NavLink to="/" className="navbar navbar-brand">Pixly</NavLink>
            <NavLink to="/all" className="nav-link">All</NavLink>
            <NavLink to="/upload" className="nav-link">Upload</NavLink>
        </div>
    )
}

export default NavBar;