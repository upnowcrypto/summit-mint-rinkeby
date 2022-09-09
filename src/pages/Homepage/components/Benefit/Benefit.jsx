import React from "react";

import classes from "./Benefit.module.css";

import benefit_images from "images/render_1.mp4";
import benefit_images1 from "images/01.mp4";
import benefit_images2 from "images/dots.png";

const Benefit = () => {
  return (
    <div>
      <section id="benefit" className={classes.benefit}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <h2 className="glowTitle">BENEFITS</h2>
              <p className={`${classes.benefitText} text-center`}>
                The Summit is proud to give our holders real-life utility that <br /> provides
                actual value to the membership from day one
              </p>
            </div>
            <div className={`col-lg-5 col-md-6`}>
              <div className={classes.videoContainer}>
                <video
                  autoPlay
                  playsInline
                  loop
                  muted
                  src={benefit_images}
                  type="mp4"
                  id={classes.myVideo1}
                ></video>
              </div>

              <div className={classes.rare1}>
                <p className={classes.rareBacked}>Tier 1</p>

                <br />

                <h6 className={classes.daysRare}>250 QTY</h6>
                <br />

                <div className={classes.separator2}></div>
                <br />

                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>15% Discount On All Purchases</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Priority Fast Pass To All Establishments*</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Guest Passes</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Exclusive Merchandise</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Access To Members-Only Events</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Mint Pass</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-5 col-md-6`}>
              <div className={classes.videoContainer}>
                <video
                  autoPlay
                  playsInline
                  loop
                  muted
                  src={benefit_images1}
                  type="mp4"
                  id={classes.myVideo1}
                ></video>
              </div>

              <div className={classes.rare1}>
                <p className={classes.rareBacked}>Tier 2</p>

                <br />

                <h6 className={classes.daysRare}>650 QTY </h6>
                <br />

                <div className={classes.separator2}></div>
                <br />

                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>7.5% Discount On All Purchases</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Priority Fast Pass To All Establishments*</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Exclusive Merchandise</p>
                </div>
                <div className={classes.rareContent}>
                  <img src={benefit_images2} alt="" />
                  <p>Access To Members-Only Events</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row justify-content-center mt-5">
            <div className="col-md-5"></div>
            <div className="col-md-5">
              
            </div>
          </div> */}

          <br />
          <br />

          <div>
            <div className="text-center">
              <button className="blueBtn">Join The List</button>
            </div>
            <br />
            <p className={`${classes.subCap} text-center`}>subject to capacity*</p>
          </div>

          <div className="sparaters"></div>
        </div>
      </section>
    </div>
  );
};

export default Benefit;
