import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import clsx from "clsx";
import styles from "./Account.module.scss";
import { users } from "../../../../Json/Users.js";
import useLocalStorage from "../../../hooks/useLocalStorage";

function Login() {
  const [show, setShow] = useState(false);
  const [dataUsers, setDataUsers] = useLocalStorage("users", users);
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valuePassword2, setValuePassword2] = useState("");
  const [toggleEmail, setToggleEmail] = useState(false);
  const [toggleEmail2, setToggleEmail2] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBlurPass = () => {
    if (valuePassword.trim().length < 6) {
      setTogglePassword(true);
    } else {
      setTogglePassword(false);
    }
  };
  const handleBlurPass2 = () => {
    if (valuePassword === valuePassword2) {
      setTogglePassword2(false);
    } else {
      setTogglePassword2(true);
    }
  };

  const handleBlurEmail = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const resultEmail = re.test(String(valueEmail).toLowerCase());
    setToggleEmail(!resultEmail);
    const userE = (dataUsers || users).find(
      (user) => user.email === valueEmail
    );
    setToggleEmail2(userE ? true : false);
  };
  const updateUsers = () => {
    if (
      !toggleEmail &&
      !togglePassword &&
      !togglePassword2 &&
      !toggleEmail2 &&
      valueEmail.length !== 0
    ) {
      setDataUsers([
        ...dataUsers,
        {
          id: dataUsers.length + 1 || users.length + 1,
          email: valueEmail,
          password: valuePassword,
          addresses: [],
          fullName: {
            firstName: "",
            lastName: "",
            displayName: "",
          },
          order: [],
          cart: [],
        },
      ]);
      setValueEmail("");
      setValuePassword("");
      setValuePassword2("");
      handleClose();
    }
  };
  return (
    <>
      <span
        variant="primary"
        onClick={handleShow}
        className={clsx(styles.loginButton, styles.loginBtn)}
      >
        ĐĂNG KÝ
      </span>
      <Modal className={styles.modal} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG KÝ</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div className={styles.modalContent}>
            {toggleEmail2 && <span>Email đã được đăng ký</span>}
            <p>Địa chỉ email *</p>
            <input
              type="email"
              value={valueEmail}
              onChange={(e) => setValueEmail(e.target.value)}
              onBlur={handleBlurEmail}
              placeholder="Nhập email"
            />
            {toggleEmail && <span>Email không đúng</span>}
            <p>Mật khẩu *</p>
            <input
              type="password"
              value={valuePassword}
              onChange={(e) => setValuePassword(e.target.value)}
              onBlur={handleBlurPass}
              placeholder="Nhập mật khẩu"
            />
            {togglePassword && <span>Mật khẩu tối thiểu có 6 kí tự</span>}
            <p>Nhập lại mật khẩu *</p>
            <input
              type="password"
              value={valuePassword2}
              onChange={(e) => setValuePassword2(e.target.value)}
              onBlur={handleBlurPass2}
              placeholder="Nhập lại mật khẩu"
            />
            {togglePassword2 && <span>Mật khẩu không trùng khớp</span>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={updateUsers}>
            ĐĂNG KÝ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Login;
