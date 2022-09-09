import React from "react";
import { Link, useHistory } from "react-router-dom";

import { BiMenu } from "react-icons/bi";

import header_images from "images/logo.png";
import header_images1 from "images/twitter (2).png";
import header_images2 from "images/discord (2) 1.png";
import header_images3 from "images/opensea.png";

import classes from "./Header.module.css";

const Header2 = () => {
  const history = useHistory();

  return (
    <div>
      <nav>
        <input type="checkbox" id={classes.check} />
        <label htmlFor={classes.check} className={classes.checkbtn}>
          <BiMenu style={{ fontSize: "40px", color: "white" }} />
        </label>
        <label className={classes.logo}>
          <img
            src={header_images}
            alt=""
            className={classes.logoImage}
            onClick={() => history.push("/")}
          />
        </label>
        <ul className={classes.socialIconsList}>
          <li>
            <a href="#">
              <img src={header_images1} alt="" className="twiiiter-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={header_images2} alt="" className="discord-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={header_images3} alt="" className="opensea-icon" />
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#benefit">Benefits</a>
          </li>
          <li>
            <a href="#holder">Gallery</a>
          </li>
          <li>
            <a href="#howToMint">How To Mint</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <Link to="MintMain">Mint</Link>
          </li>
        </ul>
      </nav>
      {/* <section></section> */}
    </div>
  );
};

export default Header2;
