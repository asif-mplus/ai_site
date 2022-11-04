import React from "react";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="blog-container section__margin section__padding">
      <h2 className="gradient__text">
        A lot is happening, <br />
        We are blogging about it.
      </h2>

      <div className="blog-grid-container">
        <div className="grid-box box1">
          <img src={blog01} alt="" />
          <div className="blog-details">
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p className="bottom-text">Read Full Article</p>
          </div>
        </div>
        <div className="grid-box">
          <img src={blog02} alt="" />
          <div className="blog-details">
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="grid-box">
          <img src={blog03} alt="" />
          <div className="blog-details">
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="grid-box">
          <img src={blog04} alt="" />
          <div className="blog-details">
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="grid-box">
          <img src={blog05} alt="" />
          <div className="blog-details">
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
