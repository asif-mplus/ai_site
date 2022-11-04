import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div
      className="possibility-main-container section__padding section__margin"
      id="open"
    >
      <div className="possibility-image">
        <img src={possibility} alt="possibilities" />
      </div>
      <div className="flex-center">
        <div className="possibility-desc">
          <p>Request Early Access to Get Started</p>
          <h3 className="gradient__text">
            The possibilities are <br /> beyond your imagination
          </h3>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="sub">Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
