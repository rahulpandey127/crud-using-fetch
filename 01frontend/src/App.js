import NavbarComp from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import "./index.css";
// Source - https://stackoverflow.com/a
// Posted by Patryk Chowratowicz 'Zszywacz'
// Retrieved 2025-12-14, License - CC BY-SA 4.0

import * as bootstrap from "bootstrap";
window.Modal = bootstrap.Modal;

function App() {
  return (
    <Router>
      <div className="container ">
        <NavbarComp />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
