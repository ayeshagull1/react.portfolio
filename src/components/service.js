import React from "react";


const Services = () => {
  return (
    <section className="services-section section" id="services">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="service-heading">
        <h2>Services</h2>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up">
        <i className="bi bi-code-slash mb-3"></i>
        <h3>Web Development</h3>
        <p>Building responsive and user-friendly websites.</p>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-down">
        <i className="bi bi-laptop mb-3"></i>
        <h3>UI/UX Design</h3>
        <p>Designing modern interfaces for better user experience.</p>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-right">
        <i className="bi bi-phone mb-3"></i>
        <h3>Mobile App Development</h3>
        <p>Creating mobile apps for Android and iOS platforms.</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Services;
