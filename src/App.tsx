// import './App.css';

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from './NavBar';


/** Renders Pixly App
 * 
 * Props, State: none
 * 
 * Index -> App -> {Nav, Routes}
 */
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
