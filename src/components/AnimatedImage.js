import React from "react";
import './AnimatedImage.css';
import mario from '../assets/mario.png';
import dokan from '../assets/dokan.png';
import cloud from '../assets/cloud.png';
import coin from '../assets/coin.png';

const AnimatedImage = () => {
    return (
        <div className="animated-image-wrapper">
            <div className="animated-cloud-container">
                <img src={cloud} alt="Cloud 1" className="animated-cloud cloud-1" />
                <img src={cloud} alt="Cloud 2" className="animated-cloud cloud-2" />
                <img src={cloud} alt="Cloud 3" className="animated-cloud cloud-3" />
            </div>
            <div className="animated-dokan-container">
                <img src={dokan} alt="Dokan 1" className="animated-dokan" />
                <img src={coin} alt="coin" className="animated-coin" />
                <img src={dokan} alt="Dokan 2" className="animated-dokan" />
            </div>
            <div className="animated-mario-container">
                <img src={mario} alt="Mario" className="animated-mario" />
            </div>
        </div>
    );
};

export default AnimatedImage;