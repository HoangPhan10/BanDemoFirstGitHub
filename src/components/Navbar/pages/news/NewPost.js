import styles from "./new.module.scss";
import { IoSearch } from "react-icons/io5";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
function NewPost() {
  return (
    <section className={styles.newpost}>
      <div className={styles.Input}>
        <input placeholder="Tìm kiếm" />
        <button>
          <IoSearch />
        </button>
      </div>
      <h6>BÀI VIẾT MỚI</h6>
      <div className={styles.newpostList}>
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
    </section>
  );
}
export default NewPost;
