import React from "react";
import { Link } from "react-router-dom";

//import css
import "../styles/components/NavBar.css";

function navBar(){
    return(
        <nav className="navBar">
            <Link to="/" className="link">homepage</Link>
            <Link to="/all-tasks">task page</Link>
        </nav>
    )
}

export default navBar;