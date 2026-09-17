import React from "react";
import '../assets/styles/CoverLetter.scss';

const criteria = [
  {
    title: "A commitment to ethical conduct and the highest standards of professional accountability",
    body: "During my winter scholarship on the IntelliForce safety system at the UTS Robotics Institute, I identified a fault in the fail-safe firmware behaviour ahead of a scheduled demonstration. Rather than proceed, I reported the issue immediately and delayed the milestone until it was fully resolved and re-tested. The system now passes every safety check reliably, and I was asked to lead validation testing on future firmware changes."
  },
  {
    title: "Demonstrated ability to effectively communicate both with other engineers and with stakeholders from different fields",
    body: "As machine learning lead on Sort-O, an autonomous plastic sorting robot, I defined the shared data interfaces between perception, motion control and execution engineers, and presented our progress to both a client and an academic panel, adjusting my language for technical and non-technical audiences. This contributed to a fully integrated robot achieving 0.991 mAP@50, with positive feedback on the clarity of our presentations."
  },
  {
    title: "The ability to engage with a creative, innovative and proactive environment",
    body: "During my internship at PT Saptaindra Sejati, I proactively designed and simulated an Arduino-based IMU alert system for excavator inclination monitoring, a solution nobody on the team had proposed. My prototype directly contributed to a broader PLC/HMI monitoring system that has since reduced swing bearing failures across the fleet."
  },
  {
    title: "Demonstrated ability to use and manage information",
    body: "While leading a feasibility study for a collaborative robotic welding system at PT Saptaindra Sejati, I developed a weighted decision matrix to evaluate five vendor proposals against cost, safety and integration criteria, documenting my findings in formal TER and TOR reports. My recommendation was accepted, resulting in the successful procurement and commissioning of the selected system."
  },
  {
    title: "The ability to manage your own performance in a professional environment",
    body: "In my first agile software internship at PwC, I built the habit of documenting my progress daily against sprint goals after initially underestimating the coordination required. By the second half of the internship, I was contributing reliably to feature implementation, debugging, and stress testing without close supervision."
  },
  {
    title: "A demonstrated ability to work as part of a team and to show leadership when required",
    body: "While leading the embedded software subsystem on a four-person Pedometer Tracker project, I stepped in to help resolve a filtering issue holding back the electronics subsystem, keeping the team on track to deliver within our original 12-week timeframe at over 90% detection accuracy."
  }
];

function CoverLetter() {
  return (
    <div className="container" id="cover-letter">
      <div className="items-container">
        <div className="cover-letter">
          <h1>Cover Letter</h1>
          <p className="cover-letter-recipient">Industrus Engineering</p>
          <p className="cover-letter-salutation">Dear Hiring Manager,</p>

          {criteria.map((item, index) => (
            <div className="cover-letter-criterion" key={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}

          <p className="cover-letter-closing">I would welcome the opportunity to discuss my application further at interview. Please feel free to contact me on the details provided in my CV. I look forward to hearing from you.</p>
          <p className="cover-letter-signoff">Regards,<br />Rian Edwards</p>
        </div>
      </div>
    </div>
  );
}

export default CoverLetter;
