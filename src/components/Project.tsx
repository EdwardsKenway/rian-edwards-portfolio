import React from "react";
import sortO from '../assets/images/sort-o.jpg';
import pedometer from '../assets/images/pedometer.jpg';
import robotPickPlace from '../assets/images/robotpickplace.png';
import warman2024 from '../assets/images/warman2024.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://jun-je0ng.github.io/Robotics-Studio-2" target="_blank" rel="noreferrer"><img src={sortO} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jun-je0ng.github.io/Robotics-Studio-2" target="_blank" rel="noreferrer"><h2>Sort-O: Autonomous Plastic Sorting Robot</h2></a>
                <p>Led the Machine Learning subsystem within a 4-person team building a fully autonomous robot that detects, classifies and sorts plastic waste using a UR3e robotic arm, depth camera and ROS2. Fine-tuned a YOLOv8 OBB model achieving mAP@50 of 0.991. Check it out: <a href="https://jun-je0ng.github.io/Robotics-Studio-2" target="_blank" rel="noreferrer">https://jun-je0ng.github.io/Robotics-Studio-2</a></p>
            </div>
            <div className="project">
                <img src={pedometer} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Pedometer Tracker</h2>
                <p>Designed an accelerometer-based step detection system using the ADXL335 sensor with 90%+ accuracy, leading the embedded software subsystem and assisting with PCB schematic design in Altium.</p>
            </div>
            <div className="project">
                <img src={robotPickPlace} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Robot Pick and Place</h2>
                <p>Developed a MATLAB-based algorithm for object detection and classification using image processing and camera calibration, executing pick-and-place tasks with a DoBot robot.</p>
            </div>
            <div className="project">
                <img src={warman2024} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Warman Challenge 2024</h2>
                <p>Integrated mechanical and electronic subsystems to develop a functional autonomous delivery robot, coordinating actuators, sensors and motors under competition conditions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
