import React from "react";
import { Zoom } from "react-slideshow-image";
import styles from "./home.module.scss";
import { useContext } from "react";
import { Images } from "./Addcart";
function Slideshow() {
  const arrImage = useContext(Images);
  let images = [arrImage.img1];
  if (arrImage.img4) {
    images.push(arrImage.img4);
  }
  if (arrImage.img2) {
    images.push(arrImage.img2);
  }
  if (arrImage.img3) {
    images.push(arrImage.img3);
  }
  if (arrImage.img5) {
    images.push(arrImage.img5);
  }
  if (arrImage.img6) {
    images.push(arrImage.img6);
  }
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
    {images.length>1 &&(
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
    )}
    {images.length===1&&(
      <div>
      <img className={styles.slideshowImage} style={{marginTop:50}} alt="" src={images[0]} /> 
      </div>
    )}
  </div>
  );
}

export default Slideshow;
