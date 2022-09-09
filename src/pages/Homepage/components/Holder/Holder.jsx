import React from "react";

import ImageCard from "./ImageCard";

import classes from "./Holder.module.css";

import { data1, data2, data3 } from "./data";

const Holder = () => {
  return (
    <section id="holder" className={classes.holderBenefit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <p className="glowTitle">WHERE OUR HOLDERS GET BENEFITS</p>
          </div>
          <div className="col-md-4">
            <div>
              {data1.map((data, index) => (
                <ImageCard index={index} data={data} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div>
              {data2.map((data, index) => (
                <ImageCard index={index} data={data} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div>
              {data3.map((data, index) => (
                <ImageCard index={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sparaters"></div>
        </div>
      </div>
    </section>
  );
};

export default Holder;
