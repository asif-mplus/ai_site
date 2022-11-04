import React from "react";
import "./ai.css";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import ai from "../../assets/ai.png";
// import top_left from "../../assets/top_left_border.png";
// import top_right from "../../assets/top_right_border.png";
import group from "../../assets/Group.png";
import group1 from "../../assets/Group1.png";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";
import vector5 from "../../assets/Vector5.png";
import vector6 from "../../assets/Vector6.png";
// import bottom_left from "../../assets/bottom-left-border.png";
// import bottom_right from "../../assets/bottom-right-border.png";

const Ai = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div className="ai-container">
      <div ref={sceneEl}>
        <img data-depth=".1" src={ai} className="ai" />
        {/* <img data-depth=".4" className="group" src={group} /> */}
        {/* <img data-depth=".6" className="group1" src={group1} /> */}
        <img data-depth=".3" className="vector1" src={vector1} />
        <img data-depth=".4" className="vector2" src={vector2} />
        <img data-depth=".3" className="vector" src={vector} />
        <img data-depth=".6" className="vector3" src={vector3} />
        <img data-depth=".6" className="vector4" src={vector4} />
        <img data-depth=".8" className="vector5" src={vector5} />
        <img data-depth="1" className="vector6" src={vector6} />
        {/* <img
          className="borders top-left"
          data-depth=".2"
          src={top_left}
          alt=""
        />
        <img
          className="borders top-right"
          data-depth=".8"
          src={top_right}
          alt=""
        />
        <img
          className="borders bottom-left"
          data-depth=".6"
          src={bottom_left}
          alt=""
        />
        <img
          className="borders bottom-right"
          data-depth=".2"
          src={bottom_right}
          alt=""
        /> */}
      </div>
    </div>
    // </div>
  );
};

export default Ai;
