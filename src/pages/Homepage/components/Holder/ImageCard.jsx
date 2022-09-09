import React from "react";

import classes from "./Holder.module.css";

const ImageCard = (props) => {
  return (
    <div key={props.index} className={`${classes.featuredWork} text-center`}>
      <div
        id={props.data.styleId}
        className={classes.bkg}
        style={{ backgroundImage: `url(${props.data.image})` }}
      >
        <h3 className={classes.imageTitle}>{props.data.title}</h3>
      </div>

      <div className={classes.caption}>{props.data.detail}</div>
    </div>
  );
};

export default ImageCard;
