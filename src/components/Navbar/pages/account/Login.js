import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Account.module.scss";
import CallApi from "../../../api/callApi";
import {re} from './checkEmail'
function Login() {
  const [show, setShow] = useState(false);
  const [dataUsers, setDataUsers] = useState([]);
  useEffect(() => {
    CallApi("", "GET", null).then((res) => {
      if (res) {
        setDataUsers(res.data);
      }
    });
  }, []);
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

    
    const resultEmail = re.test(String(valueEmail).toLowerCase());
    setToggleEmail(!resultEmail);
    CallApi("", "GET", null).then((res) => {
      const userE = res.data.find((user) => user.email === valueEmail);
      setToggleEmail2(userE ? true : false);
    });
  };
  const updateUsers = () => {
    if (
      !toggleEmail &&
      !togglePassword &&
      !togglePassword2 &&
      !toggleEmail2 &&
      valueEmail.length !== 0
    ) {
      CallApi("create/user", "POST", {
        id: dataUsers.length + 1,
        email: valueEmail,
        password: valuePassword,
        addresses: [],
        fullName: {},
        order: [],
        cart: [],
      });
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
        ????NG K??
      </span>
      <Modal className={styles.modal} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>????NG K??</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div className={styles.modalContent}>
            {toggleEmail2 && <span>Email ???? ???????c ????ng k??</span>}
            <p>?????a ch??? email *</p>
            <input
              type="email"
              value={valueEmail}
              onChange={(e) => setValueEmail(e.target.value)}
              onBlur={handleBlurEmail}
              placeholder="Nh???p email"
            />
            {toggleEmail && <span>Email kh??ng ????ng</span>}
            <p>M???t kh???u *</p>
            <input
              type="password"
              value={valuePassword}
              onChange={(e) => setValuePassword(e.target.value)}
              onBlur={handleBlurPass}
              placeholder="Nh???p m???t kh???u"
            />
            {togglePassword && <span>M???t kh???u t???i thi???u c?? 6 k?? t???</span>}
            <p>Nh???p l???i m???t kh???u *</p>
            <input
              type="password"
              value={valuePassword2}
              onChange={(e) => setValuePassword2(e.target.value)}
              onBlur={handleBlurPass2}
              placeholder="Nh???p l???i m???t kh???u"
            />
            {togglePassword2 && <span>M???t kh???u kh??ng tr??ng kh???p</span>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={updateUsers}>
            ????NG K??
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Login;
