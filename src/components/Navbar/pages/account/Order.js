import styles from "./Account.module.scss";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Order() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const toggle = user.order.length > 0 ? true : false;
  const handleSubmit = (index) => {
    window.localStorage.setItem("index", JSON.stringify(index));
  };
  return (
    <>
      <div className={styles.order}>
        {toggle && (
          <Table className={styles.orderTable} variant="light">
            <thead>
              <tr style={{ fontSize: "14px" }}>
                <th>ĐƠN HÀNG</th>
                <th>NGÀY</th>
                <th>TÌNH TRẠNG</th>
                <th>TỔNG</th>
                <th>CÁC THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              {user.order.map((el, index) => (
                <tr key={index} style={{ fontSize: "16px", color: "#444" }}>
                  <td>{el.code}</td>
                  <td>{el.day}</td>
                  <td>{el.status}</td>
                  <td>
                    {el.price} đ x {el.quantity}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      style={{ fontSize: "13px", fontWeight: "700" }}
                      as={Link}
                      to="/account/detailOrder"
                      onClick={() => handleSubmit(index)}
                    >
                      XEM
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {!toggle && (
          <div className={styles.orderButton}>
            <Button variant="danger">TỚI CỦA HÀNG </Button>
            <p>Chưa có đơn hàng được tạo ra</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Order;
