import styles from "./new.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";
function NewLink() {
  return (
    <div>
      <div className={styles.link}>
        <Nav.Link
          as={Link}
          to="/home"
          className={clsx(styles.linkButton, styles.facebook)}
        >
          <FaFacebookF /> Facebook
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/home"
          className={clsx(styles.linkButton, styles.instagram)}
        >
          <FaInstagram /> Instagram
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/home"
          className={clsx(styles.linkButton, styles.twitter)}
        >
          <FaTwitter /> Twitter
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/home"
          className={clsx(styles.linkButton, styles.pinterest)}
        >
          <FaPinterest /> Pinterest
        </Nav.Link>
      </div>
      <div className={styles.comment}>
        <h5>Nhận xét</h5>
        <p>
          Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
          được đánh dấu *
        </p>
        <h6>Bình luận</h6>
        <input />
        <div className={styles.commentFlex}>
          <div>
            <strong>Tên</strong>
            <input />
          </div>
          <div>
            <strong>Email *</strong>
            <input />
          </div>
          <div>
            <strong>Số điện thoại *</strong>
            <input />
          </div>
        </div>
        <Nav.Link className={styles.commentButton}>PHẢN HỒI</Nav.Link>
      </div>
    </div>
  );
}
export default NewLink;
