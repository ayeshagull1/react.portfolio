import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skillsData = [
    { skill: "HTML", level: 90 },
    { skill: "CSS", level: 85 },
    { skill: "JavaScript", level: 80 },
    { skill: "React", level: 75 },
    { skill: "Bootstrap", level: 90 },
    { skill: "Node.js", level: 70 },
  ];

  return (
    <section className="skills-section bg-light py-5" id="skills">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Skills</h2>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="skill-item">
                <h5>{skill.skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
