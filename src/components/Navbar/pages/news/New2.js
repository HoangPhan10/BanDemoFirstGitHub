import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import NewLink from "./NewLink";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function New2() {
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
          TIN TỨC {imageNewPost[1].day}
        </Nav.Link>
        <h3>{imageNewPost[1].title}</h3>
        <img src={imageNewPost[1].img3} alt="" />
        <h4>{imageNewPost[1].content}</h4>
        <p>
          Không chỉ trong địa hạt âm nhạc và cả trong thời trang, tầm ảnh hưởng
          của BTS cũng không thể xem thường được. Theo giới thạo tin, những item
          được BTS mặc hay quảng bá, thường là những món hết hàng trong nháy
          mắt. Họ, giờ đây có “quyền năng” khiến mọi sản phẩm trở thành best
          seller.
        </p>
        <p>
          Cũng bởi thế, 7 chàng trai vàng của Big Hit Entertainment luôn được
          các nhãn hàng săn đón nhiệt tình. Ngoài việc tài trợ đồ, họ còn cùng
          nhau hợp tác sản xuất ra những item có số lượng giới hạn. Gần đây nhất
          là BT21, cú collab không thể dễ thương hơn của BTS và Converse – đại
          diện sneaker đã quá quen thuộc với các bạn trẻ yêu thời trang.
        </p>
        <p>
          Về mặt thiết kế, BT21 vẫn có phom dáng giống dòng giày Chuck Taylor
          All Star kinh điển của Converse. Vải vẫn là vải canvas, phần mũi vẫn
          được cắt gọn gàng, không có quá nhiều thay đổi lớn. Điểm khác biệt
          nhất chính là loạt họa tiết đáng yêu, cũng chính là các sticker quen
          thuộc với người dùng Facebook Messenger. Ngoài ra, phần dây buộc chấm
          bi màu mè cũng là điểm nhấn khá nổi bật.
        </p>
        <p>
          Một bộ sản phẩm đầy đủ ngoài một đôi giày BT21, còn có túi tote màu
          đen và 8 chiếc huy hiệu khác nhau, cho phép bạn tự design, tự biên tự
          diễn chiếc túi theo ý thích của mình. Theo thông tin ban đầu, phiên
          bản cổ ngắn sẽ được bán với giá 84 USD (1,9 triệu VNĐ) còn phiên bản
          cao cổ có giá 87 USD (hơn 2 triệu VNĐ). Nếu không có gì thay đổi, BST
          này sẽ được lên kệ vào ngày 27/7 tới tại Hàn Quốc, Hongkong, Đài Loan
          và Trung Quốc.
        </p>
        <img className={styles.Image} src={imageNewPost[1].img4} alt="" />
        <img className={styles.Image} src={imageNewPost[1].img7} alt="" />
        <img className={styles.Image} src={imageNewPost[1].img5} alt="" />
        <img className={styles.Image} src={imageNewPost[1].img6} alt="" />
        <NewLink />
      </div>
    </section>
  );
}
export default New2;
