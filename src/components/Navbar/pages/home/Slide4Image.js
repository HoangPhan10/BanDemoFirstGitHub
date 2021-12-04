import styles from "./home.module.scss";
import { Button } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
// 4 image
function SlideImage(props) {
  return (
    <div className={styles.slide1}>
      <div className="slide-container">
        <Slide>
          {props.slide.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ marginLeft: 45, display: "flex" }}>
                <div className={styles.slideimage}>
                  <img src={slideImage.url1} alt="slide1" />
                  <p>{slideImage.title1}</p>
                  <span>{slideImage.price1}</span>
                  <div>
                    <Button
                      as={Link}
                      to="/addcart"
                      // to={`/Cart/${slideImage.title1.split(" ").join("-")}-${
                      //   slideImage.id1
                      // }`}
                      className={styles.slideimageHover}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                  </div>
                </div>
                <div className={styles.slideimage}>
                  <img src={slideImage.url2} alt="slide1" />
                  <p>{slideImage.title2}</p>
                  <span>{slideImage.price2}</span>
                  <div>
                    <Button
                      className={styles.slideimageHover}
                      onClick={console.log(2)}
                      as={Link}
                      to={`/Cart/${slideImage.title2.split(" ").join("-")}-${
                        slideImage.id2
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                  </div>
                </div>
                <div className={styles.slideimage}>
                  <img src={slideImage.url3} alt="slide1" />
                  <p>{slideImage.title3}</p>
                  <span>{slideImage.price3}</span>
                  <div>
                    <Button
                      className={styles.slideimageHover}
                      onClick={console.log(2)}
                      as={Link}
                      to={`/Cart/${slideImage.title3.split(" ").join("-")}-${
                        slideImage.id3
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                  </div>
                </div>
                <div className={styles.slideimage}>
                  <img src={slideImage.url4} alt="slide1" />
                  <p>{slideImage.title4}</p>
                  <span>{slideImage.price4}</span>
                  <div>
                    <Button
                      className={styles.slideimageHover}
                      onClick={console.log(2)}
                      as={Link}
                      to={`/Cart/${slideImage.title4.split(" ").join("-")}-${
                        slideImage.id4
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default SlideImage;
