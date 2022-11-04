import React from "react";
import { useRef, useEffect } from "react";
import "./header.css";
import Ai from "../ai/Ai";
import people from "../../assets/people.png";
import AiGlitch from "../ai/aiGlitch/AiGlitch";
import Ellipse31 from '../../assets/Ellipse31.png';
import Ellipse32 from '../../assets/Ellipse32.png';
import Ellipse33 from '../../assets/Ellipse33.png';
import Ellipse34 from '../../assets/Ellipse34.png';
import Ellipse35 from '../../assets/Ellipse35.png';
import Ellipse36 from '../../assets/Ellipse36.png';
import Ellipse37 from '../../assets/Ellipse37.png';

const Header = () => {
  return (
    <div className="main-container" id="home">
      <div className="desc-container">
        <h2 className="gradient__text">
          Let's Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h2>
        <h4>
          Yet bed any for travelling assistance indulgence unpleasing. <br />{" "}
          Not thoughts all exercise blessing. Indulgence way <br /> everything
          joy alteration boisterous the attachment. Party <br /> we years to
          order allow asked of.
        </h4>
        <div className="cta-email">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="people">
          {/* <img src={people} alt="" /> */}
          <div className="social-connects">
            <img src={Ellipse31} />
            <img src={Ellipse32} />
            <img src={Ellipse33} />
            <img src={Ellipse34} />
            <img src={Ellipse35} />
            <img src={Ellipse36} />
            <img src={Ellipse37} />
          </div>

          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <Ai />
      {/* <AiGlitch /> */}
      {/* <div className="ai-container">
        <img src={ai} alt="ai_image" />
        <div className="overlay-container" ref={sceneEl}>
          <img
            className="borders top-left"
            data-depth="0.6"
            src={top_left}
            alt=""
          />
          <img
            className="borders top-right"
            data-depth="0.6"
            src={top_right}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default Header;
