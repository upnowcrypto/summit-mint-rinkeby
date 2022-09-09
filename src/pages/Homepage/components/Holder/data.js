import holder_images1 from "images/holder1.png";
import holder_images2 from "images/holder2.png";
import holder_images3 from "images/sumit-img.jpg";
import holder_images4 from "images/thumb_TopRight.jpg";
import holder_images5 from "images/thumb_BottomRight.jpg";

import classes from "./Holder.module.css";

export const data1 = [
  {
    title: "AH SING DEN",
    detail: (
      <p>
        A Unique Asian-Inspired
        <br /> Restaurant & Craft
        <br />
        Cocktail Lounge
      </p>
    ),
    image: holder_images1,
    styleId: classes.bkg1,
  },
  {
    title: "SUMMIT LOUNGE",
    detail: (
      <p>
        Located below Summit Rooftop
        <br /> Lounge, Summit Lounge is a<br /> cocktail lounge that brings great
        <br /> vibes to everyone who
        <br />
        enters
      </p>
    ),
    image: holder_images2,
    styleId: classes.bkg2,
  },
];

export const data2 = [
  {
    title: "SUMMIT",
    detail: (
      <p>
        Overlooking the historical
        <br /> warehouse district, Summit
        <br />
        is one of Austin’s largest and
        <br /> most prominent rooftop
        <br /> venues
      </p>
    ),
    image: holder_images3,
    styleId: classes.bkg3,
  },
];

export const data3 = [
  {
    title: "KEY BAR",
    detail: (
      <p>
        A relaxed, outdoor hangout
        <br /> spot with fun happy
        <br />
        hours and located in the
        <br /> heart of West 6th Street
      </p>
    ),
    image: holder_images4,
    styleId: classes.bkg4,
  },
  {
    title: "THE PARLOR ROOM",
    detail: (
      <p>
        Parlor Room is an original
        <br /> Craftsman house redesigned
        <br /> into a fun and trendy local hot
        <br /> spot featuring craft cocktails,
        <br /> and craft beer on tap
      </p>
    ),
    image: holder_images5,
    styleId: classes.bkg5,
  },
];
