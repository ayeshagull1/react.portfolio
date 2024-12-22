import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2022",
      details: "Specialized in Software Development and Artificial Intelligence.",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology",
      institution: "Global IT College",
      year: "2020",
      details: "Focused on Web Development and Networking.",
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "City High School",
      year: "2016",
      details: "Majored in Mathematics and Computer Science.",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Education</h2>
        <div className="row justify-content-center">
          {educationData.map((edu) => (
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" key={edu.id}>
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">{edu.degree}</h5>
                  <h6 className="text-muted">{edu.institution}</h6>
                  <p className="text-muted">{edu.year}</p>
                  <p className="card-text">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
