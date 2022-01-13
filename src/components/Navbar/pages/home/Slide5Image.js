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
            <div className="each-slide" style={{width:1200}} key={index}>
              <div style={{ marginLeft: 72, display: "flex" }}>
                <div className={styles.slideimage1}>
                  <img src={slideImage.url1} alt="slide1" />
                  <p>{slideImage.title1}</p>
                  <span>{slideImage.price1}</span>
                  <div>
                    {slideImage.id1&&(<Button
                      as={Link}
                      to={`/Cart/${slideImage.title1.split(" ").join("-")}-${
                        slideImage.id1
                      }`}
                      className={styles.slideimage1Hover}
                    >
                      THÊM VÀO GIỎ
                    </Button>)}
                    {!slideImage.id1&&(<Button
                      as={Link}
                      to={`/Cart/${slideImage.title1.split(" ").join("-")}`}
                      className={styles.slideimage1Hover}
                    >
                      THÊM VÀO GIỎ
                    </Button>)}
                  </div>
                </div>
                <div className={styles.slideimage1}>
                  <img src={slideImage.url2} alt="slide1" />
                  <p>{slideImage.title2}</p>
                  <span>{slideImage.price2}</span>
                  <div>
                  {slideImage.id2&&(
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title2.split(" ").join("-")}-${
                        slideImage.id2
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                  )}
                  {!slideImage.id2&&(
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title2.split(" ").join("-")}`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                  )}
                  </div>
                </div>
                <div className={styles.slideimage1}>
                  <img src={slideImage.url3} alt="slide1" />
                  <p>{slideImage.title3}</p>
                  <span>{slideImage.price3}</span>
                  <div>
                   {slideImage.id3 &&(
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title3.split(" ").join("-")}-${
                        slideImage.id3
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                   )}
                   {!slideImage.id3 &&(
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title3.split(" ").join("-")}`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                   )}
                  </div>
                </div>
                <div className={styles.slideimage1}>
                  <img src={slideImage.url4} alt="slide1" />
                  <p>{slideImage.title4}</p>
                  <span>{slideImage.price4}</span>
                  <div>
                   {slideImage.id4 &&(
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title4.split(" ").join("-")}-${
                        slideImage.id4
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                   )}
                   {!slideImage.id4 &&(
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title4.split(" ").join("-")}`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                   )}
                  </div>
                </div>
                <div className={styles.slideimage1}>
                  <img src={slideImage.url5} alt="slide1" />
                  <p>{slideImage.title5}</p>
                  <span>{slideImage.price5}</span>
                  <div>
                   {slideImage.id5 && (
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title5.split(" ").join("-")}-${
                        slideImage.id5
                      }`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                   )}
                   {!slideImage.id5 && (
                      <Button
                      className={styles.slideimage1Hover}
                      as={Link}
                      to={`/Cart/${slideImage.title5.split(" ").join("-")}`}
                    >
                      THÊM VÀO GIỎ
                    </Button>
                   )}
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
