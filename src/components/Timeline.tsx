import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2026 - Ongoing"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Winter Scholarship — IntelliForce Hydraulic/Pneumatic Safety System</h3>
            <h4 className="vertical-timeline-element-subtitle">UTS Robotics Institute</h4>
            <p>
              Developing an ESP32-based hydraulic and pneumatic pump safety system for a mining industrial partner, including custom PCB design and embedded C++ firmware with runtime-configurable safety parameters.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2025 - February 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern — Plant Development & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Saptaindra Sejati (Subsidiary of Adaro Energy)</h4>
            <p>
              Led a feasibility study for a collaborative robotic welding system and designed an Arduino-based IMU alert system, contributing to a PLC/HMI monitoring system that reduced swing bearing failures in Komatsu excavators.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2025 - March 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern — Software Development & Business Analysis</h3>
            <h4 className="vertical-timeline-element-subtitle">PricewaterhouseCoopers (PwC)</h4>
            <p>
              Contributed to a web application using Python (Django), JavaScript and CSS, and authored TSD/FSD documentation in an agile development environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
