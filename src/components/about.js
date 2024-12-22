import React, { useEffect } from "react";
import aboutImage from "../images/about.jpg";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section
      className="about-section section bg-gradient"
      id="about"
      style={{ position: "relative", padding: "4rem 0" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            style={{ textAlign: "center" }}
          >
            <img
              src={aboutImage}
              alt="About Me"
              className="img-fluid rounded shadow about-img"
              style={{ maxWidth: "100%", borderRadius: "15px" }}
            />
          </div>
          <div
            className="col-lg-6 text-left"
            data-aos="fade-left"
            style={{ zIndex: 2 }}
          >
            <h1 className="section-title">About Me</h1>
            <p className="section-description">
              Hi, I’m John, a passionate and detail-oriented frontend developer
              with expertise in creating responsive, user-friendly, and
              visually appealing web applications. With a strong foundation in
              HTML, CSS, JavaScript, and frameworks like Bootstrap and React, I
              specialize in turning ideas into interactive, seamless digital
              experiences.
            </p>
            <a href="#contact" className="btn btn-primary custom-button">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
