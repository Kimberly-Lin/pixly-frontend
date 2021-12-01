import logo from "./pixly-logo.png"
import "./Home.css"
import {Link} from "react-router-dom"

/** Renders Home page
 * 
 * Props: none
 * State: none
 * 
 * Routes -> Home
 * 
 * Location: /
 */

function Home() {
    return (
        <div className="Home">
            <img className="Home-img" src={logo} alt="logo"/>
            <h1>Welcome to Pix.ly!</h1>
            <Link className="btn btn-primary m-1" to="/all">See All Pix</Link>
            <Link className="btn btn-secondary m-1" to="/upload">Upload a Pix</Link>
        </div>
    )
}

export default Home;