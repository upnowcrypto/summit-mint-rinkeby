import React from "react";
import { Link } from "react-router-dom";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";

import banner_images1 from "images/video-banner20.mp4";
import banner_images2 from "images/front.png";

import classes from "./Hero.module.css";

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInImg = styled.img`
  animation: 2s ${zoomInAnimation};
`;

const Hero = () => {
  return (
    <section id={classes.hero}>
      <video
        autoPlay
        playsInline
        loop
        muted
        src={banner_images1}
        type="mp4"
        className={classes.myVideo}
      ></video>

      <div className={classes.heroContent}>
        <ZoomInImg
          src={banner_images2}
          alt="Logo"
          className={classes.logo}
          onClick={() => (window.location.href = "https://wigatech.com/up-know/")}
        />

        <br />

        <p className={classes.heroText}>NFTs FOR AUSTIN NIGHTLIFE</p>

        <br />

        <div>
          <button className="blueBtn m-1">HOLDER LOGIN</button> &nbsp;&nbsp;
          <Link to="MintMain">
            <button className="blueBtn m-1">MINT</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
