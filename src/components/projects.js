import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import EcommerceImage from "../images/e-commerce.jpg";
import MobileappImage from "../images/mobileapp.jpg";
import PortfoliowebsiteImage from "../images/portfolio-website.jpg";
import DashboardImage from "../images/dashboard.avif";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website with payment integration.",
      image: EcommerceImage, 
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing design and development skills.",
      image: PortfoliowebsiteImage,
      link: "#",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "A cross-platform mobile app built with React Native.",
      image: MobileappImage,
      link: "#",
    },
    {
      id: 4,
      title: "Dashboard UI",
      description: "An analytics dashboard built with React and Chart.js.",
      image: DashboardImage,
      link: "#",
    },
  ];

  return (
    <section className="projects-section section bg-light" id="projects">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" key={project.id}>
              <div className="card shadow h-100">
                <img
                  src={project.image} 
                  alt={project.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
