import React from "react";
import "./AnimatedDokan.css";
import dokan from '../assets/dokan.png';

const AnimatedDokan = () => {
    return (
        <div className="animated-dokan-container">
            <img src={dokan} alt="Dokan" className="animated-dokan" />
        </div>
    );
};

export default AnimatedDokan;
