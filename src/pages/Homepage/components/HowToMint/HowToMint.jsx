import React from "react";

import classes from "./HowToMint.module.css";

import { mintCardsdata } from "./data";

const HowToMint = () => {
  return (
    <section id="howToMint" className={classes.howToMint}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="glowTitle2">HOW TO MINT</h2>
          </div>
        </div>

        <br />

        <div className="row">
          {mintCardsdata.map((data, index) => (
            <div key={index} className="col-lg-4 p-3">
              <div className={`${classes.howToMintContent} h-100`}>
                <img src={data.image} alt="" className={classes.cardImage} />
                <br />
                <h4 className={classes.cardTitle}>{data.title}</h4>
                <p className={classes.cardText}>{data.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="sparaters"></div>
        </div>
      </div>
    </section>
  );
};

export default HowToMint;
