import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import NewLink from "./NewLink";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function New5() {
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
          TIN TỨC {imageNewPost[4].day}
        </Nav.Link>
        <h3>{imageNewPost[4].title}</h3>
        <img src={imageNewPost[4].img3} alt="" />
        <h4>{imageNewPost[4].content}</h4>
        <p>
          Đã tự nhận là một tín đồ thời trang nói chung và sneakers nói riêng
          thì ắt, “Thần Kinh Giày” là một Group mà bạn đã từng nghe qua hoặc
          tham gia. Đây là một tập thể các bạn trẻ mê giày, họ cùng nhau chia sẻ
          các thông tin và bí quyết về sneakers, hay đơn giản nhất là đăng tải
          những hình ảnh phong cách thời trang cá nhân với sneakers.
        </p>
        <p>
          Và tất nhiên, lượt like – comment thường là yếu tố để đánh giá xem một
          bức ảnh thời trang có cuốn hút hay không. Nếu xét trên yếu tố này thì
          một cô nhóc mẫu giáo ắt khiến kha khá anh chàng cô nàng phải thầm ghen
          tỵ vì sở hữu tấm hình lên đến… 18 ngàn like!
        </p>
        <p>
          Thường những “cool kid” với phong cách chững chạc như cô bé sẽ nhận
          được sự hưởng ứng mạnh mẽ từ giới mộ điệu, nên thực ra “ca” này cũng
          không có gì lạ. Được biết, hình ảnh của cô nhóc do chính người mẹ chia
          sẻ vào Group “Thần Kinh Giày” nhằm mục đích thỏa mãn đam mê thời
          trang.
        </p>
        <p>
          Được biết, cô bé có tên thật là Linh Đan, tên thân mật ở nhà là bé
          Vịt, chỉ mới 6 tuổi. Mẹ của Linh Đan cho biết rằng cô bé thường tự lựa
          chọn trang phục và tỏ ra rất có khiếu với thời trang. 4 tháng đổ lại
          đây, bé Linh Đan có tham gia thêm một số hoạt động thời trang như
          người mẫu nhí. Nhưng khi chia sẻ về tương lai thì mẹ của bé cho biết
          rằng mọi thứ sẽ để Linh Đan tự lựa chọn thay vì gượng ép. Hiện tại, cô
          bé rất mê những đôi Converse.
        </p>
        <NewLink />
      </div>
    </section>
  );
}
export default New5;
