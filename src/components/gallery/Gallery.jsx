import React from "react";
import "./gallery.css";
import ai from "../../assets/ai.png";
import top_left from "../../assets/top_left_border.png";
import top_right from "../../assets/top_right_border.png";
import group from "../../assets/Group.png";
import group1 from "../../assets/Group1.png";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";
import bottom_left from "../../assets/bottom-left-border.png";
import bottom_right from "../../assets/bottom-right-border.png";

const Gallery = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <img src="https://source.unsplash.com/1000x800" />
          <span>CSS</span>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x802" />
          <span>Image</span>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x804" />
          <span>Hover</span>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x806" />
          <span>Effect</span>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <img src="https://source.unsplash.com/1000x800" />
          <span>CSS</span>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x802" />
          <span>Image</span>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x804" />
          <span>Hover</span>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x806" />
          <span>Effect</span>
        </div>
      </div>
    </>
  );
};

export default Gallery;
