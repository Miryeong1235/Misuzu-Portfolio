import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <Link to="/project/Oishii-Ramen"><h3>Oishii Ramen</h3></Link>
                <p>Java-based Ramen store management game</p>
            </div>
            <div className="project">
                <Link to="/project/Minutemon"><h3>Minutemon</h3></Link>
                <p>Time management application</p>
            </div>
            <div className="project">
                <Link to="/project/Kyoto-Adventure"><h3>Kyoto Adventure</h3></Link>
                <p>Python-based Command line game of Kyoto</p>
            </div>
            <div className="project">
                <Link to="/project/helper"><h3>helper</h3></Link>
                <p>Mobile application to join a virtual wait list of the emergency room</p>
            </div>


        </div>
    );
}

export default Projects;