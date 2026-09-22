import React from "react";
import '../assets/styles/CV.scss';

const resumeUrl = `${process.env.PUBLIC_URL}/Rian Edwards Resume.pdf`;
const resumeEmbedUrl = `${resumeUrl}#view=FitH`;

function CV() {
  return (
    <div className="container" id="cv">
      <div className="items-container cv-page">
        <h1>Curriculum Vitae</h1>
        <p className="cv-links">
          <a href={resumeUrl} target="_blank" rel="noreferrer">Open in new tab</a>
          {' · '}
          <a href={resumeUrl} download>Download PDF</a>
        </p>
        <div className="cv-embed">
          <iframe src={resumeEmbedUrl} title="Rian Edwards Resume"></iframe>
        </div>
      </div>
    </div>
  );
}

export default CV;
