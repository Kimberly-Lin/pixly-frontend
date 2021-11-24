import logo from "./pixly-logo.png"
import "./Home.css"
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
        </div>
    )
}

export default Home;