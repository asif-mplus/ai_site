import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="features GPT-line">
      {/* <h4>Chatbots</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam placeat
        adipisci
      </p> */}
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
