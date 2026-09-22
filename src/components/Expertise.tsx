import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faBrain, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C/C++",
    "ROS 2",
    "Arduino",
    "ESP32 / M5Stack",
    "PCB Design",
    "Sensor Integration",
    "Motor Drivers"
];

const labelsSecond = [
    "Python",
    "YOLOv8 OBB",
    "scikit-learn",
    "MATLAB",
    "Dataset Preparation",
    "Model Training & Evaluation"
];

const labelsThird = [
    "SolidWorks",
    "3D Printing",
    "Mechanical Assembly",
    "Altium",
    "Rapid Prototyping"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Embedded Systems & Robotics</h3>
                    <p>I design and build embedded control systems end-to-end, from custom PCBs and sensor integration through to firmware, spanning ESP32/M5Stack platforms and ROS2-based robotics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Machine Learning & Computer Vision</h3>
                    <p>I fine-tune and evaluate computer vision models for real-world robotics tasks, from dataset preparation through to deployment on physical systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDraftingCompass} size="3x"/>
                    <h3>Design, CAD & Prototyping</h3>
                    <p>I take mechanical designs from concept to physical prototype, using CAD modelling, 3D printing and hands-on assembly to validate ideas quickly.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
