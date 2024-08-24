import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Oishii Ramen</h3>
                <p>Java-based Ramen store management game</p>
            </div>
            <div className="project">
                <h3>Minutemon</h3>
                <p>Time management application</p>
            </div>
            <div className="project">
                <h3>helper</h3>
                <p>Mobile application to join a virtual wait list of the emergency room</p>
            </div>
            <div className="project">
                <h3>Kyoto Adventure</h3>
                <p>Python-based Command line game of Kyoto</p>
            </div>

        </div>
    );
}

export default Projects;