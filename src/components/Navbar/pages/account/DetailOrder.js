import styles from "./Account.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DetailOrder() {
  const index = JSON.parse(window.localStorage.getItem("index"));
  const user = JSON.parse(window.localStorage.getItem("user"));
  return (
    <div className={styles.detailOrder}>
      <p className={styles.detailOrderTitle}>
        {" "}
        Đơn hàng <span>{user.order[index].code}</span> đã được đặt vào ngày{" "}
        <span>{user.order[index].day}</span> và hiện tại là{" "}
        <span>{user.order[index].status}</span>
      </p>
      <h4>Chi tiết đơn hàng</h4>
      <div style={{ borderBottom: "3px solid #eee" }}>
        <p>SẢN PHẨM</p>
        <p>TỔNG</p>
      </div>
      <div>
        <span>
          {user.order[index].nameProduct} x {user.order[index].quantity}
        </span>
        <strong>{user.order[index].total} đ</strong>
      </div>
      <div>
        <strong>Tổng số phụ:</strong>
        <strong>{user.order[index].total} đ</strong>
      </div>
      <div>
        <strong>Giao nhận hàng:</strong>
        <span>Giao hàng miễn phí</span>
      </div>
      <div>
        <strong>Phương thức thanh toán:</strong>
        <span>Trả tiền mặt khi nhận hàng</span>
      </div>
      <div>
        <strong>Tổng cộng:</strong>
        <strong>{user.order[index].price} đ</strong>
      </div>

      <h4 style={{ marginTop: "20px" }}>Địa chỉ thanh toán</h4>
      <section>
        <strong>Địa chỉ:</strong>
        <p>{user.addresses[0].addressHome}</p>
      </section>
      <section>
        <strong>Số điện thoại:</strong>
        <p>{user.addresses[0].phone}</p>
      </section>
      <section>
        <strong>Tên người nhận :</strong>
        <p>{user.addresses[0].name}</p>
      </section>
      <Button
        variant="danger"
        style={{ marginBottom: "50px" }}
        as={Link}
        to="/account/order"
      >
        TRỞ LẠI
      </Button>
    </div>
  );
}
export default DetailOrder;
