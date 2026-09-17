import React from "react";
import '../assets/styles/Reflection.scss';

const reflections = [
  {
    question: "What were your expectations before you joined?",
    answer: "I expected a traditional corporate internship: being assigned defined tasks on someone else's project, learning how the company works, shadowing senior engineers on site, maybe getting a feel for what professional engineering looks like. I assumed the big decisions would happen above my level and that my job was to execute smaller, well-scoped pieces of a larger problem."
  },
  {
    question: "What was the reality? How was it different from your expectations?",
    answer: "The reality was almost the opposite. Within the first week, I was given ownership of a live feasibility study: investigating whether collaborative robotic welding could replace high-risk manual welding at heights up to 4.5 metres. This wasn't a textbook exercise. The business needed a decision, and they needed it grounded in vendor evaluation and technical risk assessment. I had to scope the problem myself, define what 'feasibility' meant in the company's context, approach five different vendors with technical specifications, design a weighted decision matrix to compare their solutions, and deliver a recommendation that the team could actually act on. I also designed and simulated an IMU-based alert system for inclination monitoring, which fed into a broader hardware upgrade that reduced bearing failures on Komatsu excavators. I wasn't shadowing. I was making decisions that the company was betting on."
  },
  {
    question: "What lessons were the most important from your internship? Why were they important?",
    answer: "First, scoping is half the engineering. Before you can evaluate anything, you have to be clear about what success looks like: tolerances, cost constraints, timeline, risk appetite. I spent the first week just talking to site engineers and management to understand the real boundary conditions. Second, a weighted decision matrix is a professional tool, not busywork. By defining my evaluation criteria up front, I gave everyone a shared framework to discuss trade-offs, turning subjective opinions into traceable reasoning that other people could challenge or defend. Third, embedding yourself in the operation beats any report. I spent time on site watching how the current welding process actually happened and talking to operators about pain points, which changed every assumption I made about what a robot needed to do. Finally, good technical work is useless if the people who need to act on it don't understand it. The feasibility memo I delivered was one page: the recommendation, the key risks, what we still needed to know. That one page was worth more to the business than weeks of detailed analysis nobody would read."
  },
  {
    question: "What would you say your value proposition would be to an employer? How can you demonstrate this?",
    answer: "I can take a fuzzy problem and turn it into a decision-ready recommendation. That means scoping it against real constraints, evaluating solutions systematically, stating my assumptions plainly and flagging what's still uncertain. I can bridge between engineering and business, talking to operations about what they actually need, to vendors about what's technically feasible, and to management about risk and cost in a way that makes sense to them. I can demonstrate this directly: the weighted decision matrix I built for vendor evaluation, the feasibility study that led to actual procurement, and the IMU system design that fed into a real hardware upgrade at the facility."
  },
  {
    question: "How did your internship influence the type of role in which you are interested?",
    answer: "It changed my trajectory completely. Before this internship, I wasn't sure whether I wanted to stay in pure software development or move into hardware and embedded systems. This experience showed me that I want the overlap: embedded systems and automation that have immediate, measurable real-world impact. I'm no longer interested in roles where I'm several steps removed from the outcome. I want to design safety systems, develop automation platforms, or lead feasibility studies where I can see the result deployed and working. It also reframed what 'engineering' means to me: it's not just being technically correct, it's being useful. My next role will be one where I own that responsibility."
  }
];

function Reflection() {
  return (
    <div className="container" id="reflection">
      <div className="items-container">
        <h1>Internship Reflection</h1>
        {reflections.map((item, index) => (
          <section className="reflection-section" key={index}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Reflection;
