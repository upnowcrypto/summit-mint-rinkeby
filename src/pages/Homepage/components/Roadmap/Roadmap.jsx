import React from "react";

import classes from "./Roadmap.module.css";

import roadmap_imagees from "images/banner-backer.jpg";

const Roadmap = () => {
  return (
    <section id="about" className={classes.about}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="glowTitle text-left">What Is The Summit Collection</h2>
            <p className={classes.aboutText}>
              The Summit Collection is an exclusive collection of 900 NFTs that grant holders
              exclusive perks at the Summit Night Club and other bars and restaurants in the heart
              of Austin, Texas. Not only do these NFTs have real-life value, but they also act as
              your membership card which will be scanned at the door. Once you purchase an NFT,
              generate a QR code from the holder login and add it to your respective mobile wallet.
              <br />
              This is one of the first projects of this kind and we are super excited to share it
              with you. Join today and be a part of an amazing community.
            </p>
          </div>

          <div className="col-md-6">
            <img src={roadmap_imagees} alt="" className={classes.aboutImg} />
          </div>
        </div>

        <div className="sparaters"></div>
      </div>
    </section>
  );
};

export default Roadmap;
