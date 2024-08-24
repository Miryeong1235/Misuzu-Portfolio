import React from 'react';
import './Introduction.css';
import box from '../assets/box.png';

const Introduction = () => {
    return (
        <div id="introduction" className="introduction">

            <h2><img src={box} alt="Box" className="box" />Highlight of Myself</h2>
            <ul>
                <li>Computer Science student at British Columbia Institute of Technology, Vancouver</li>
                <li>Midwife in Japan</li>
                <li>Multilingual (Japanese, English, Korean, Mandarin)</li>
                <li>Dancer (K-POP, HIPHOP, Street Jazz)</li>
                <li>Optimistic, Curious person</li>
            </ul>
        </div>
    );
}

export default Introduction;