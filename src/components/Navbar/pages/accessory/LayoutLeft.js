import styles from "./accessory.module.scss";
import { arrImageLayout } from "../../../../assets/images/home/Cart/shoes/imageShoes";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
function LayoutLeft() {
  return (
    <div className={styles.accessoryLeft}>
      <h6>SẢN PHẨM</h6>
      <div className={styles.accessoryLeftList}>
        {arrImageLayout.map((el, index) => (
          <Nav.Link
            key={index}
            as={Link}
            to={el.url}
            className={styles.accessoryLeftListItem}
          >
            <img src={el.img} alt="" />
            <div>
              <p>{el.name}</p>
              <span>{el.price}đ</span>
            </div>
          </Nav.Link>
        ))}
      </div>
      <h6>BÀI VIẾT MỚI NHẤT</h6>
      <div className={styles.accessoryLeftList2}>
        {imageNewPost.map((el, index) => (
          <Nav.Link
            as={Link}
            to={el.src}
            key={index}
            className={styles.newpostListContent}
          >
            <img src={el.img1} alt="" />
            <p>{el.title}</p>
          </Nav.Link>
        ))}
      </div>
    </div>
  );
}

export default LayoutLeft;
