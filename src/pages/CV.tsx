import React from "react";
import '../assets/styles/CV.scss';

function CV() {
  return (
    <div className="container" id="cv">
      <div className="items-container">
        <h1>Curriculum Vitae</h1>

        <section className="cv-section">
          <h2>Career Objective</h2>
          <p>Motivated fourth-year Mechatronics Engineering student at the University of Technology Sydney, with a strong interest in automation, robotics, sensing systems, CAD, machine learning, and embedded electronics. Experienced in hands-on prototyping and technical problem-solving, and eager to apply practical engineering expertise in fast-paced, real-world environments.</p>
        </section>

        <section className="cv-section">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Programming:</strong> C/C++, Java, Python, ROS 2, Arduino, MATLAB, JavaScript, HTML, CSS, Git/GitHub</li>
            <li><strong>Machine Learning:</strong> YOLOv8 OBB, scikit-learn, dataset preparation, model training and evaluation</li>
            <li><strong>Design & CAD:</strong> SolidWorks, 3D printing, mechanical assembly</li>
            <li><strong>Embedded Systems & Electronics:</strong> PCB design, soldering, motor drivers, sensor integration, M5Stack</li>
            <li><strong>Software:</strong> Adobe Premiere Pro/Photoshop, Azure, Microsoft Office, VS Code</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <div className="cv-entry">
            <h3>Bachelor of Engineering (Honours), Mechatronics</h3>
            <h4>University of Technology Sydney (UTS) — February 2023 to December 2026</h4>
            <p>WAM: 80.23</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Work Experience</h2>

          <div className="cv-entry">
            <h3>Winter Scholarship — IntelliForce Hydraulic/Pneumatic Safety System</h3>
            <h4>UTS Robotics Institute — June 2026 to Ongoing</h4>
            <p>Developing an ESP32-based safety system for a mining partner. Designed and validated a custom PCB for solenoid valve switching, and developed and debugged embedded C++ firmware with runtime-configurable safety parameters.</p>
          </div>

          <div className="cv-entry">
            <h3>Intern — Plant Development & Engineering</h3>
            <h4>PT Saptaindra Sejati (subsidiary of Adaro Energy) — December 2025 to February 2026</h4>
            <p>Led a feasibility study for a collaborative robotic welding system, eliminating high-risk manual welding at heights up to 4.5m. Developed TER/TOR documents and ran a vendor evaluation via a weighted decision matrix across five suppliers, resulting in successful procurement and commissioning. Designed and simulated an Arduino-based IMU alert system for inclination-triggered warnings at a 9-degree threshold, contributing to a PLC/HMI monitoring system that reduced swing bearing failures in Komatsu excavators.</p>
          </div>

          <div className="cv-entry">
            <h3>Intern — Software Development & Business Analysis</h3>
            <h4>PwC — January 2025 to March 2025</h4>
            <p>Contributed to a web application using Python/Django, JavaScript, and CSS. Authored TSD/FSD documents and designed and executed test scripts, including stress tests.</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Relevant Projects</h2>

          <div className="cv-entry">
            <h3>Sort-O: Autonomous Plastic Sorting Robot</h3>
            <p>Led the ML subsystem in a 4-person team, fine-tuning a YOLOv8 OBB model achieving mAP@50 of 0.991, precision 0.988, and recall 0.991. Designed a K-Means clustering algorithm for pick order optimisation.</p>
          </div>

          <div className="cv-entry">
            <h3>Pedometer Tracker</h3>
            <p>Built an accelerometer-based step detection system using an ADXL335, achieving 90%+ accuracy. Led the embedded software subsystem and assisted with PCB design in Altium.</p>
          </div>

          <div className="cv-entry">
            <h3>Robot Pick and Place</h3>
            <p>Developed MATLAB-based object detection and classification with camera calibration for real-world positioning, executed via a DoBot robot.</p>
          </div>

          <div className="cv-entry">
            <h3>Warman Challenge 2024</h3>
            <p>Integrated mechanical and electronic subsystems for an autonomous delivery robot.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CV;
