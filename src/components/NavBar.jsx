import React from "react";
import { Link } from "react-router-dom";

//import css
import "../styles/components/NavBar.css";

function navBar(){
    return(
        <div className="navBox">
            <div className="websiteNameBox">
                <h1 className="websiteName">Task Manager</h1>
            </div>
            <nav className="navBar">
                <Link to="/" className="link">homepage</Link>
                <Link to="/all-tasks">task page</Link>
            </nav>
        </div>
        
    )
}

export default navBar;