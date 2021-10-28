import './App.css';

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Nav from "./Nav";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
