import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta-container section__padding section__margin" >
      <div className="cta-desc">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p className="font-size ">
          Register today & start exploring the endless possibilities.
        </p>
      </div>
      <div className="cta-button">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
