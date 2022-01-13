import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { arrImageSale } from "../../../../assets/images/home/Cart/shoes/saleoff/arrImageSaleOff";
function SaleOff() {
  return (
    <section className={styles.accessoryHome}>
      <h5>PHỤ KIỆN KHÁC</h5>
      <div className={styles.accessoryHomeContent}>
        {arrImageSale.map((el, index) => (
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
            <div className={styles.sale}>
              <p>{el.sale}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SaleOff;
