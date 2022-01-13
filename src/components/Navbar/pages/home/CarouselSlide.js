import styles from "./home.module.scss";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  slide1,
  slide2,
  slide3,
  slide11,
  slide22,
  slide33,
} from "../../../../assets/images/home/Slide/imageSlide";

import {
  title1,
  title2,
  title3,
  product1,
  product2,
  product3,
} from "../../../../assets/images/home/Title/imageTitle";
import { AiOutlineStar } from "react-icons/ai";
function CarouselSlide() {
  return (
    <>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img className="d-block" src={slide1} alt="First slide" />
          <Carousel.Caption className={styles.carouselCaption1}>
            <h1>
              MONA SNE
              <AiOutlineStar className={styles.outlineStar} />
              KER
            </h1>

            <p>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây,mỗi một dòng
              chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử Converse 100 năm, và không ngừng phát triển mạnh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={slide2} alt="Second slide" />

          <Carousel.Caption className={styles.carouselCaption2}>
            <h1>
              MONA SNE
              <AiOutlineStar className={styles.outlineStar} />
              KER
            </h1>

            <p>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây,mỗi một dòng
              chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử Converse 100 năm, và không ngừng phát triển mạnh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={slide3} alt="Third slide" />

          <Carousel.Caption className={styles.carouselCaption3}>
            <h1>
              MONA SNE
              <AiOutlineStar className={styles.outlineStar} />
              KER
            </h1>

            <p>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây,mỗi một dòng
              chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử Converse 100 năm, và không ngừng phát triển mạnh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel className={styles.carousel1}>
        <Carousel.Item>
          <img className="d-block" src={slide11} alt="First slide" />
          <Carousel.Caption className={styles.carousel1Caption1}>
            <h1>
              MONA SNE
              <AiOutlineStar className={styles.outlineStar} />
              KER
            </h1>

            <p>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây,mỗi một dòng
              chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử Converse 100 năm, và không ngừng phát triển mạnh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={slide22} alt="Second slide" />

          <Carousel.Caption className={styles.carousel1Caption1}>
            <h1>
              MONA SNE
              <AiOutlineStar className={styles.outlineStar} />
              KER
            </h1>

            <p>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây,mỗi một dòng
              chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử Converse 100 năm, và không ngừng phát triển mạnh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={slide33} alt="Third slide" />

          <Carousel.Caption className={styles.carousel1Caption1}>
            <h1>
              MONA SNE
              <AiOutlineStar className={styles.outlineStar} />
              KER
            </h1>

            <p>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây,mỗi một dòng
              chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn
              lịch sử Converse 100 năm, và không ngừng phát triển mạnh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <img src={title1} alt="image6" className={styles.img1} />
            <img src={product1} alt="image1" className={styles.img2} />
            <div className={styles.overlay}>
              <Button as={Link} to="/men" variant="success">
                Xem sản phẩm
              </Button>
            </div>
          </Col>
          <Col className={styles.col}>
            <img src={title2} alt="image2" className={styles.img1} />
            <img src={product2} alt="image3" className={styles.img2} />
            <div className={styles.overlay}>
              <Button as={Link} to="/women" variant="success">
                Xem sản phẩm
              </Button>
            </div>
          </Col>
          <Col className={styles.col}>
            <img src={title3} alt="image4" className={styles.img1} />
            <img src={product3} alt="image5" className={styles.img2} />
            <div className={styles.overlay}>
              <Button as={Link} to="/store" variant="success">
                Xem sản phẩm
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CarouselSlide;
