import styles from "./Account.module.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Dashboard() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const validName = user.email.split("@")[0];
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboard2}>
          Xin chào <strong>{validName}</strong>
        </div>
        <p>
          Từ trang quản lý tài khoản bạn có thể xem đơn hàng mới, quản lý địa
          chỉ giao hàng và thanh toán, and sửa mật khẩu và thông tin tài khoản.
        </p>
        <div className={styles.dashboardBtn}>
          <Button
            variant="danger"
            className={styles.dashboardBtnBtn1}
            as={Link}
            to="/account/order"
          >
            Đơn hàng
          </Button>
          <Button
            variant="danger"
            className={styles.dashboardBtnBtn1}
            as={Link}
            to="/account/dowload"
          >
            Tải xuống
          </Button>
          <Button
            variant="danger"
            className={styles.dashboardBtnBtn1}
            as={Link}
            to="/account/address"
          >
            Địa chỉ
          </Button>
          <Button
            variant="danger"
            className={styles.dashboardBtnBtn1}
            as={Link}
            to="/account/accountInfor"
          >
            Thông tin tài khoản
          </Button>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
