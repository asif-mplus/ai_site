import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featureData = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Message or am nothing ",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Improving end distrusts instantly ",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county ",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
]  

const Features = () => {
  return (
    <div className="features-main-container section__margin">
      <div className="features-section1">
        <h2 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-section2">
        <div className="feature-subsection">
          {featureData.map((item) => {
            return <Feature title={item.title} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
