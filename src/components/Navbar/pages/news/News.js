import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.news}>
      <h5>TIN TỨC</h5>
      <div className={styles.newsContent}>
        <div>
          <NewPost />
        </div>
        <div className={styles.newsContentGrid}>
          {imageNewPost.map((el, index) => (
            <Nav.Link
              as={Link}
              to={el.src}
              key={index}
              className={styles.newsContentGridSix}
            >
              <img src={el.img2} alt="" />
              <strong>{el.title}</strong>
              <p>{el.content}</p>
              <div>{el.day}</div>
            </Nav.Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default News;
