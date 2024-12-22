import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>© 2024 MyPortfolio. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#facebook" className="text-white">
              Facebook
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#twitter" className="text-white">
              Twitter
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#instagram" className="text-white">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
