import React, { useEffect } from "react";

const Contact = () => {
  // Example of useEffect being used correctly inside the component
  useEffect(() => {
    console.log("Contact component has mounted.");
  }, []);

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h1 className="text-center" data-aos="fade-down">Contact Me</h1>
        <form className="row g-3 mt-4">
          <div className="col-md-6" data-aos="fade-up">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="col-md-6" data-aos="fade-down">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-12" data-aos="fade-right">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <div className="col-12 text-center" data-aos="fade-left">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
