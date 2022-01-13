import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import NewLink from "./NewLink";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function New1() {
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
          TIN TỨC {imageNewPost[0].day}
        </Nav.Link>
        <h3>{imageNewPost[0].title}</h3>
        <img src={imageNewPost[0].img3} alt="" />
        <h4>{imageNewPost[0].content}</h4>
        <p>
          Không cần nói quá nhiều về kẻ lắm tài Tyler nữa và hẳn ai cũng đã biết
          mối thâm giao giữa “Flower Boy” và Converse với vô số lần release BST
          Converse GLF được thiết kế độc quyền trên dòng One Star nổi tiếng và
          cực kì thành công đến mức chưa đầy 3 ngày đã treo bảng sold out. Nhưng
          ở lần này, Converse đã giao Chuck 70 cho Tyler để chuẩn bị tạo nên cục
          diện mới.
        </p>
        <p>
          Chính xác hơn thì đây là một sự mở rộng sứ mệnh của Tyler khi vẫn trên
          motif hoa đặc trưng nhưng lại trên một nền tảng mới – Chuck 70 cùng
          loại chất liệu vải đặc biệt thân thiện với môi trường khác – vải bố.
        </p>
        <p>
          Được thiết kế theo tinh thần của Chuck 70 vintage và ngôn ngữ thời
          trang hiện đại nhà Golfwang, Tyler “offer” vẫn giữ sự cổ điển của
          Chuck 70 bằng 2 tone màu trung tính: nâu Curry và trắng ngà Parchment
          kết hợp với chất liệu vải bố được dàn đều ở upper cho riêng phiên bản
          Curry.
        </p>
        <img src={imageNewPost[0].img4} alt="" />
        <p>
          15/11/2018 là ngày chúng sẽ được lên kệ toàn thế giới và được biết
          pack Converse GLF* này thuộc dòng Incubate và số lượng nó xuất hiện
          mặc định là có hạn và chưa chắc bạn có thể mua được vì hễ launch là
          sold out trong ngày đó.
        </p>
        <p>
          Theo nguồn thì rất có thể Converse VN sẽ mang pack đầy fame này về thị
          trường sneaker năm nay. Chưa bao giờ Việt Nam có được cơ hội mua trực
          tiếp Golf le Fleur* nên nếu có sẽ là một cú sang chấn rất thú vị cho
          các sneakerhead/reseller đây. Thông tin chính thức sẽ sớm được cập
          nhật sau.
        </p>
        <NewLink />
      </div>
    </section>
  );
}
export default New1;
