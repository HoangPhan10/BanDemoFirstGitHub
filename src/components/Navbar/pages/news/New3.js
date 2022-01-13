import styles from "./new.module.scss";
import { useEffect } from "react";
import { imageNewPost } from "../../../../assets/images/news/imageNew";
import NewPost from "./NewPost";
import NewLink from "./NewLink";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function New3() {
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
          TIN TỨC {imageNewPost[2].day}
        </Nav.Link>
        <h3>{imageNewPost[2].title}</h3>
        <img src={imageNewPost[2].img4} alt="" />
        <h4>{imageNewPost[2].content}</h4>
        <p>
          #ChucksFirst? Bạn dám không? là câu thách thức được gửi đến giới
          trẻ/fashionista và cả sneakerhead, câu hỏi này được viral trên
          Instagram và Facebook gần đây từ hot model Brian Trần và VJ tài năng
          Kaylee.
        </p>
        <img src={imageNewPost[2].img3} alt="" />
        <p>
          Họ đưa ra thách thức này nhằm mục đích khuyến khích sự thay đổi tích
          cực và giơ cao tinh thần sống khác biệt không nhàm chán, có chút dị và
          ngược đời, cụ thể đó là sống “ngược” Start From The Bottom. Có ai dám
          thử đổi thói quen của mình mang giày trước rồi mới lên outfit sau?
        </p>
        <img src={imageNewPost[2].img5} alt="" />
        <p>
          Sau vài ngày đưa ra thử thách, có thể thấy được thử thách #ChucksFirst
          theo concept Start From The Bottom đến từ Converse này có vẻ “chạm”
          đúng đối tượng và dường như họ chẳng hề e dè để “say yes”
        </p>
        <img src={imageNewPost[2].img6} alt="" />
        <p>
          @huy.ka cậu bạn vừa mới nổi trong cộng đồng giày và cách cậu chơi game
          “ngược”.
        </p>
        <img src={imageNewPost[2].img7} alt="" />
        <p>
          Hay soái ca giới trẻ ngàn view @hoangtrung087 chọn cách on game bằng
          clip stop-motion
        </p>
        <img src={imageNewPost[2].img8} alt="" />
        <p>
          @maikyhan – 1 trong các hot face lookbook hay nhắc đến cũng không
          ngoại lệ với thử thách này
        </p>
        <img src={imageNewPost[2].img9} alt="" />
        <p>
          Ngoài ra, đối tượng gen Z như bạn @tranthutrangtrang cũng sở hữu độ
          chịu chơi không kém
        </p>
        <p>
          Có vẻ như chiến dịch đến từ Converse – Start From The Bottom đã khiến
          các fahsionista hay các bạn thuộc gen Z hoàn toàn thích thú vì bằng
          chứng là những cú gật đầu “say yes” dám thể hiện thử thách sống ngược
          của mình trên mạng xã hội.
        </p>
        <img src={imageNewPost[2].img10} alt="" />
        <p>
          Xem thêm thông tin chi tiết tại Instagram: @Converse.vn và Facebook:
          @Converse.vietnam cho các sản phẩm Chuck Taylor All Star.
        </p>
        <NewLink />
      </div>
    </section>
  );
}
export default New3;
