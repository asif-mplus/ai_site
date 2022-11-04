import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";

const Brand = () => {
  return (
    <div className="brand-section section__padding section__margin">
      <img src={google} alt="google_image" />
      <img src={slack} alt="slack_image" />
      <img src={atlassian} alt="atlassian_image" />
      <img src={dropbox} alt="dropbox_image" />
      <img src={shopify} alt="shopify_image" />
    </div>
  );
};

export default Brand;
