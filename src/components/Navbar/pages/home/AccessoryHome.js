import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { arrImageAccessory } from "../../../../assets/images/home/Cart/accessory/imageAccessory";
import banner from "../../../../assets/images/home/banner-1.jpg";
import { AiOutlineStar } from "react-icons/ai";

function AccessoryHome() {
  return (
    <section className={styles.accessoryHome}>
      <h5>SẢN PHẨM GIẢM GIÁ</h5>
      <div className={styles.accessoryHomeContent}>
        {arrImageAccessory.map((el, index) => (
          <div key={index}>
            <img src={el.img} width="285px" height="183px" alt="" />
            <p>{el.title}</p>
            <strong>{el.price}</strong>
            <Nav.Link
              className={styles.button}
              as={Link}
              to={`Cart/${el.title.split(" ").join("-")}`}
            >
              THÊM VÀO GIỎ
            </Nav.Link>
          </div>
        ))}
      </div>
      <Nav.Link className={styles.viewAll} as={Link} to="/accessory">
        XEM TẤT CẢ
      </Nav.Link>
      <div className={styles.banner}>
        <img src={banner} alt="banner" />
        <div>
          <h5>
            MONA SNE
            <AiOutlineStar />
            KER
          </h5>
          <h1>
            KHUYẾN MÃI <span>GIẢM GIÁ 50%</span>
          </h1>
          <Nav.Link className={styles.bannerAll} as={Link} to="/accessory">
            XEM TẤT CẢ
          </Nav.Link>
        </div>
      </div>
    </section>
  );
}

export default AccessoryHome;
