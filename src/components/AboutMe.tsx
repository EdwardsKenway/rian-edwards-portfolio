import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {

  return (
    <div className="container" id="about">
      <div className="items-container">
        <h1>About Me</h1>
        <p className="bio">I discovered that I belong in engineering when I realised I wanted to build things that solve real problems. I came to UTS to study Mechatronics because I wanted to understand how systems actually work, from the ground up. That curiosity has taken me through four years of hands-on projects, real internships and work that moves beyond the lecture theatre. What interests me most is taking an idea and shipping it. Whether that's designing something new, working with a team to solve a messy real-world problem, or figuring out how to make something safer or more reliable. I'm drawn to roles where I can see the direct impact of my work.</p>
        <p className="bio">My career so far has been built on ownership. Not just doing what I'm told, but taking on the full problem from start to finish. My internship at PT Saptaindra had me leading a feasibility study for a major safety improvement, which actually got approved and implemented. My work with the robotics team on Sort-O showed me how to take an idea through design, testing and delivery. My current work with IntelliForce on embedded safety systems keeps me grounded in problems that matter. I want my next role to be one where I can bring that same ownership: taking on challenging problems, learning from them, and delivering something the business can actually use. That's where I'm most effective.</p>
      </div>
    </div>
  );
}

export default AboutMe;
