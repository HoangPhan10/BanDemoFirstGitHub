import styles from "./home.module.scss";
import Slideshow from "./SlideShow";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  imagespm1,
  imagespm2,
  imagespm3,
  imagespm4,
  delivery6,
  delivery5,
  delivery4,
  delivery3,
  delivery2,
  delivery1,
  bank6,
  bank5,
  bank4,
  bank3,
  bank2,
  bank1,
} from "./Image";
import Button from "@mui/material/Button";
import { useState } from "react";

function AddCart() {
  const [num, setNum] = useState(1);

  const handleApart = () => {
    setNum((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleAdd = () => {
    setNum(num + 1);
  };

  const handleAddCart = () => {
    console.log(2250000 + 2000000);
  };
  return (
    <>
      <div className={styles.addcart}>
        <Slideshow
          img1={imagespm1}
          img2={imagespm2}
          img3={imagespm3}
          img4={imagespm4}
        />
        <div className={styles.addcartContent}>
          <div className={styles.addcartContentTitle}>
            <Nav.Link className={styles.nav} as={Link} to="/home">
              Trang chủ
            </Nav.Link>
            <span>/</span>
            <Nav.Link className={styles.nav} as={Link} to="/home">
              Nữ
            </Nav.Link>
            <span>/</span>
            <Nav.Link className={styles.nav} as={Link} to="/home">
              Classic
            </Nav.Link>
          </div>
          <h3>Chuck Taylor Classic</h3>
          <strong>1,250,000 đ</strong>
          <div className={styles.addcartContentPrice}>
            <div>
              {" "}
              <p onClick={handleApart}>-</p> <p>{num}</p>{" "}
              <p onClick={handleAdd}>+</p>
            </div>
            <Button
              variant="contained"
              color="error"
              className={styles.Button}
              onClick={handleAddCart}
            >
              THÊM VÀO GIỎ
            </Button>
          </div>
          <div style={{ marginLeft: 17, display: "flex" }}>
            <div className={styles.delivery}>
              <span>Tính phí ship tự động</span>
              <img alt="" src={delivery1} />
              <img alt="" src={delivery2} />
              <img alt="" src={delivery3} />
              <img alt="" src={delivery4} />
              <img alt="" src={delivery5} />
              <img alt="" src={delivery6} />
            </div>
            <div className={styles.bank}>
              <span>Thanh toán</span>
              <img alt="" src={bank1} />
              <img alt="" src={bank2} />
              <img alt="" src={bank3} />
              <img alt="" src={bank4} />
              <img alt="" src={bank5} />
              <img alt="" src={bank6} />
            </div>
          </div>
          <p className={styles.p}>
            "Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ
            động, kiếm tiền online"
          </p>
          <Button variant="contained" color="error" className={styles.Button}>
            Đăng ký Affilicate
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddCart;
