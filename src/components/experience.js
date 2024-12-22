

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";



const ExperienceSection = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ABC Company",
      duration: "2022 - Present",
      description:
        "Developed responsive and dynamic web applications using HTML, CSS, JavaScript, and React. Collaborated with designers and backend developers to deliver seamless user experiences.",
    },
    {
      role: "Web Developer Intern",
      company: "XYZ Company",
      duration: "2021 - 2022",
      description:
        "Assisted in building and enhancing websites with Bootstrap and modern web technologies. Gained experience in debugging, testing, and maintaining web components.",
    },
  ];

  return (
    <Container className="experience-section my-5">
      <h2 className="section-title text-center mb-4" data-aos="fade-up">Experience</h2>
      <Row>
        {experiences.map((exp, index) => (
          <Col md={12} key={index} className="mb-4" data-aos="fade-down">
            <Card className="experience-card h-100 shadow border-0">
              <Card.Body>
                <Card.Title className="role-title fw-bold" data-aos="fade-right">{exp.role}</Card.Title>
                <Card.Subtitle className="company-info mb-2" data-aos="fade-left">
                  {exp.company} | {exp.duration}
                </Card.Subtitle>
                <Card.Text className="role-description" data-aos="fade-up">{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExperienceSection;
