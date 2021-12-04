import React from "react";
import { Zoom } from "react-slideshow-image";
import styles from "./home.module.scss";

function Slideshow(props) {
  const images = [props.img1, props.img2, props.img3, props.img4];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    indicators: (i) => (
      <div className={styles.indicator}>{<img src={images[i]} alt="" />}</div>
    ),
    transitionDuration: 1000,
  };
  return (
    <div>
      <Zoom {...zoomOutProperties} className={styles.slideshow}>
        {images.map((each, index) => (
          <img
            key={index}
            className={styles.slideshowImage}
            alt=""
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
}

export default Slideshow;
