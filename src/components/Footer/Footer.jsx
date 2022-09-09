import React from "react";

import header_images from "images/logo.png";
import header_images1 from "images/twitter (2).png";
import header_images2 from "images/discord (2) 1.png";
import header_images3 from "images/opensea.png";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer id={classes.footer}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-4 col-md-4">
            <ul className={`${classes.listItems} d-flex`}>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#benefit">BENEFITS</a>
              </li>
              <li>
                <a href="#faqs">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-4 text-center">
            <img
              src={header_images}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "https://wigatech.com/up-know/")}
            />
          </div>
          <div className="col-xl-4 col-md-4">
            <ul className={`${classes.listItems} d-flex`} style={{ justifyContent: "start" }}>
              <li>
                <a href="#about" className="ml-5">
                  HOW TO MINT
                </a>
              </li>
              <li>
                <a href="#benefit">MINT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-lg-2">
          <div className="d-flex align-items-center justify-content-around">
            <a href="#">
              <img src={header_images1} alt="" />
            </a>
            <a href="#">
              <img src={header_images2} alt="" />
            </a>
            <a href="#">
              <img src={header_images3} alt="" />
            </a>
          </div>
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className={`${classes.pageLinks} d-flex`}>
            <a href="#" className={classes.linkText}>
              Terms & Condition
            </a>
            <a href="#" className={classes.linkText}>
              Terms of Service
            </a>
            <a href="#" className={classes.linkText}>
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="col-lg-12">
          <p className={classes.footerText}>© Copyright 2022 • Summit • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
