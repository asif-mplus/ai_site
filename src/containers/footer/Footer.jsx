import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="gradient__text">
        Do you want to step in to the <br /> future before others
      </h2>
      <div className="btn-container">
        <button>Request Early Access</button>
      </div>
      <div className="footer-nav-container section__padding section__margin">
        <div className="nav-subsection">
          <h1>GPT-3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="nav-subsection">
          <a href="">Links</a>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="nav-subsection">
          <a href="">Company</a>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="nav-subsection">
          <a href="">Get in touch</a>
          <p>
            Crechterwoord K12 182 <br /> DK Alknjkcb
          </p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
