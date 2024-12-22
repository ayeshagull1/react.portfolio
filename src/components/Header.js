import React, { useEffect } from "react";
import "./Header.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../images/home.jpg";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      {/* Hero section */}
      <header
        className="hero-section text-white d-flex align-items-center"
        id="home"
        style={{
          position: "relative",
          height: "100vh",
          background: `url(${homeImage}) no-repeat center center/cover`,
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
          }}
        ></div>
        <div className="container text-center text-lg-start">
          <div
            className="content"
            style={{ maxWidth: "600px", zIndex: 2 }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="display-3 fw-bold mb-4 text-gradient">
              Welcome to My Portfolio
            </h1>
            <p className="lead mb-4">
              I'm a passionate frontend developer dedicated to crafting engaging
              and user-friendly web experiences. Let’s build something amazing
              together!
            </p>
            <div>
              <a
                href="#projects"
                className="btn btn-primary btn-lg me-3"
                style={{ borderRadius: "25px" }}
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg"
                style={{ borderRadius: "25px" }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
