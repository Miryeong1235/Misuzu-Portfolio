import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    <li><a href="/">Top</a></li>
                    <li><a href="#introduction">About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div >
    );
}



export default Header;