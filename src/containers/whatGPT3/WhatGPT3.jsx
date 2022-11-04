import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div
      className="whatgpt3-main-container section__padding section__margin"
      id="what"
    >
      <div className="sub-container-1">
        <div className="what-gpt">
          <h4 className="GPT-line">What is GPT-3</h4>
        </div>
        <div className="desc-gpt">
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className="sub-container-2">
        <h3 className="gradient__text possibilities">
          The possibilities are beyond <br /> your imagination
        </h3>
        <p className="gradient__text">Explore the library</p>
      </div>
      <div className="sub-container-3">
        <Feature
          title="ChatBots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
