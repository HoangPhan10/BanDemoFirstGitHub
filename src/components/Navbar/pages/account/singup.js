import { Button, Modal, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Account.module.scss";
import { users } from "../../../../Json/Users.js";
import Login from "./Login";
import { FaUserAlt } from "react-icons/fa";
import useLocalStorage from "../../../hooks/useLocalStorage";

function Singup() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const newUser = JSON.parse(window.localStorage.getItem("user"));
  const [dataUser, setDataUser] = useLocalStorage("user", newUser);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(newUser.email);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleToggel = () => {
    const newUsers = JSON.parse(window.localStorage.getItem("users"));
    const result = (newUsers || users).find((el) => {
      return el.email === valueEmail && el.password === valuePassword;
    });
    if (result !== undefined) {
      window.localStorage.setItem("user", JSON.stringify(result));
      setToggle(false);
      handleClose();
      setShow2(false);
    } else {
      setToggle(true);
    }
  };
  const handleLogout = () => {
    const choice = window.confirm("Bạn có chắc chắn muốn đăng xuất ?");
    if (choice) {
      setDataUser({});
    }
  };
  useEffect(() => {
    if (dataUser) {
      setShow2((er) => (er = !er));
    }
  }, [dataUser]);

  return (
    <>
      {show2 && (
        <>
          <span
            variant="primary"
            onClick={handleShow}
            className={styles.loginButton}
          >
            ĐĂNG NHẬP
          </span>

          <Modal className={styles.modal} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>ĐĂNG NHẬP </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
              <div className={styles.modalContent}>
                <p>Địa chỉ email *</p>
                <input
                  type="email"
                  value={valueEmail}
                  onChange={(e) => setValueEmail(e.target.value)}
                  placeholder="Nhập email"
                />
                <p>Mật khẩu *</p>
                <input
                  type="password"
                  value={valuePassword}
                  onChange={(e) => setValuePassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                />
                {toggle && (
                  <p className={styles.modalContentErr}>Tài khoản không đúng</p>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Login />
              <Nav.Link as={Link} onClick={handleClose} to="/home">
                Quên mật khẩu
              </Nav.Link>
              <Button variant="danger" onClick={handleToggel}>
                ĐĂNG NHẬP
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
      {!show2 && (
        <div className={styles.account}>
          <NavDropdown
            title="TÀI KHOẢN "
            id="basic-nav-dropdown"
            className={styles.accountDropdown}
          >
            <NavDropdown.Item as={Link} to="/account/dashboard">
              Bảng điều khiển
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/account/order">
              Đơn hàng
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/account/dowload">
              Tải xuống
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/account/address">
              Địa chỉ
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/account/accountInfor">
              Thông tin tài khoản
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout} as={Link} to="/home">
              Đăng xuất
            </NavDropdown.Item>
          </NavDropdown>
          <FaUserAlt className={styles.accountFaUserAlt} />
        </div>
      )}
    </>
  );
}
export default Singup;
