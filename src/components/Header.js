import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="#introduction">About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#introduction">About</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </div >
    );
}



export default Header;