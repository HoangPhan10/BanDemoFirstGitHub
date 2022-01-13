import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import NewLink from "./NewLink";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function New4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.new1}>
      <div>
        <NewPost />
      </div>
      <div className={styles.new1Content}>
        <Nav.Link className={styles.Span} as={Link} to="/news">
          TIN TỨC {imageNewPost[3].day}
        </Nav.Link>
        <h3>{imageNewPost[3].title}</h3>
        <img src={imageNewPost[3].img3} alt="" />
        <h4>{imageNewPost[3].content}</h4>
        <p>
          Nếu là fan trung thành của mẫu giày canvas có logo trái tim của COMME
          des GARÇONS (CDG) PLAY x Converse thì chắc chắn đây sẽ là tin vui cho
          bạn. Sau thành công của những BST trước đó, họ đã chính thức quay trở
          lại với mẫu giày hoàn toàn mới, đủ để khiến trái tim bạn ngất lịm ngay
          từ cái nhìn đầu tiên.
        </p>
        <p>
          Khác với những serie trước đó, đứa con cưng lần này của CDG Play và
          Converse sẽ xuất hiện với bản phối màu nâu ngọt ngào và màu trắng cơ
          bản thay vì màu đen và trắng như bình thường. Phần logo hình trái tim
          sẽ xuất hiện ở dọc hai bên thân giày. Như thường lệ, đường kẻ đen ở
          phần đế giày Converse cổ điển cũng sẽ biến mất, thay vào đó là phần đế
          trắng tinh khôi. Tất nhiên, nhà sản xuất cũng sẽ tung ra hai phiên bản
          cao cổ và thấp cổ cho khách hàng dễ dàng lựa chọn.
        </p>
        <p>
          Hiện ngày ra mắt chính thức lẫn giá thành của mẫu giày này vẫn được
          CDG Play giữ kín hoàn toàn, họ mới chỉ “nhá hàng” một hình ảnh duy
          nhất mà thôi. Dù vậy, theo tin hành lang, rất có thể, nó sẽ được bày
          bán vào cuối tháng 3 này.
        </p>
        <NewLink />
      </div>
    </section>
  );
}
export default New4;
