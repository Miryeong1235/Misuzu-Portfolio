import React from "react";
import './AnimatedMario.css';
import mario from '../assets/mario.png';

const AnimatedMario = () => {
    return (
        <div className="animated-image-container">
            <img src={mario} alt="Mario" className="animated-image" />
        </div>

    );
};

export default AnimatedMario;