import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import NewLink from "./NewLink";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function New6() {
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
          TIN TỨC {imageNewPost[5].day}
        </Nav.Link>
        <h3>{imageNewPost[5].title}</h3>
        <img src={imageNewPost[5].img3} alt="" />
        <h4>{imageNewPost[5].content}</h4>
        <p>
          Converse – hay “con vớt” theo cách đọc quen thuộc của chúng ta – từ
          lâu đã là một “must-have item” trong tủ giày của những người đam mê
          sneaker. Thiết kế cơ bản, khỏe khoắn, thời trang, nhưng không kém
          phần… dã chiến, đó là những ưu điểm làm nên tên tuổi cho hãng giày nổi
          tiếng đến từ Hoa Kỳ.
        </p>
        <p>
          Hôm nay chúng ta sẽ bàn đến một chi tiết trong thiết kế của Converse.
          Nếu đang mang một đôi, bạn hãy thử lật lên và kiểm tra đế giày xem.
          Bạn sẽ thấy đế giày có 2 phần thiết kế: hoa văn vuông góc cạnh, và kèm
          theo một lớp nỉ cao su (felt) sọc mờ bao quanh.
        </p>
        <p>
          Phần hoa văn vuông góc cạnh nhằm mục đích tăng cường ma sát. Nhưng tại
          sao họ không làm đồng bộ, mà phải thêm một lớp nỉ sọc mờ kia? Phải
          chăng cũng để chống trơn trượt cho người đi?
        </p>
        <p>
          Nếu như bất chợt hỏi câu này, ai cũng sẽ nghĩ đến tác dụng như vậy
          thôi. Tuy nhiên, sự thật thì lớp nỉ ấy… chẳng có tác dụng gì cho đôi
          giày cả. Mục đích duy nhất của nó có phần “xôi thịt” hơn, đó là vì
          TIỀN.
        </p>
        <h6>
          Đế giày Converse – ví dụ chân thực nhất cho việc “thiết kế để né thuế”
        </h6>
        <p>
          Converse là hãng của Mỹ, nhưng hầu như chẳng có đôi giày nào do Mỹ sản
          xuất cả. Họ tìm đến một nước thứ 3, kí kết hợp đồng sản xuất rồi nhập
          khẩu lại. Khi nhập khẩu, họ phải chịu thuế, và đây là khởi nguồn của
          mọi chuyện.
        </p>
        <p>
          Trước tiên, theo như quy định của Mỹ, giày nhập khẩu sẽ phải chịu thuế
          rất cao, có thể lên tới 37,5%. Nhưng nếu là dép – slipper – thì khác,
          mức thuế giảm chỉ còn 3%.
        </p>
        <p>
          Vấn đề ở đây là để được phân loại vào danh sách slipper, các đôi giày
          của Converse chỉ cần có một lớp nỉ bên dưới chiếm trên 50% đế giày là
          được. Với doanh số của Converse, mức thuế 3% rõ ràng đã giúp họ tiết
          kiệm được một con số khổng lồ.
        </p>
        <p>
          Trang GazEtc là nơi đầu tiên “khai quật” được bí mật này vào năm 2010.
          Họ đã kiểm tra mã nhập khẩu loại đế giày với chất liệu của Converse
          (cụ thể là 6,430,844). Và họ tìm thấy một sản phẩm chẳng có một chút
          gì liên quan đến giày cả.
        </p>
        <img src={imageNewPost[5].img4} alt="" />
        <p>Đây đích thị là một đôi dép…</p>
        <p>
          Nhưng cũng thật may mắn, vì đế giày lót nỉ của Converse chẳng gây cản
          trở gì cho trải nghiệm của người dùng. Tuy vậy, cũng có nhiều trường
          hợp phàn nàn rằng sau một thời gian sử dụng, phần đế mờ bắt đầu có dấu
          hiệu bong tróc và đòi hỏi sửa chữa.
        </p>
        <NewLink />
      </div>
    </section>
  );
}
export default New6;
