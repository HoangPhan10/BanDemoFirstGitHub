import styles from "./Account.module.scss";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import CallApi from "../../../api/callApi";
import {re} from "./checkEmail"
function Singupmobile() {
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

  const [valueEmail3, setValueEmail3] = useState("");
  const [valuePassword3, setValuePassword3] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggel = () => {
    const result = dataUsers.find((el) => {
      return el.email === valueEmail3 && el.password === valuePassword3;
    });
    if (result !== undefined) {
      window.localStorage.setItem("user", JSON.stringify(result));
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

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
    const userE = dataUsers.find((user) => user.email === valueEmail);
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
      CallApi("create/user", "POST", {
        id: dataUsers.length + 1,
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
      });
      setValueEmail("");
      setValuePassword("");
      setValuePassword2("");
    }
  };
  return (
    <div className={styles.singupmobile}>
      <h5>????NG NH???P</h5>
      <strong>T??n t??i kho???n ho???c ?????a ch??? email *</strong>
      <input
        type="email"
        value={valueEmail3}
        onChange={(e) => setValueEmail3(e.target.value)}
      />
      <strong>M???t kh???u *</strong>
      <input
        type="password"
        value={valuePassword3}
        onChange={(e) => setValuePassword3(e.target.value)}
      />{" "}
      {toggle && <p className={styles.modalContentErr}>T??i kho???n kh??ng ????ng</p>}
      <div className={styles.Button}>
        <Button variant="danger" onClick={handleToggel}>
          ????NG NH???P
        </Button>
        <strong>Qu??n m???t kh???u</strong>
      </div>
      <h5>????NG K??</h5>
      {toggleEmail2 && <span>Email ???? ???????c ????ng k??</span>}
      <strong>?????a ch??? email *</strong>
      <input
        type="email"
        value={valueEmail}
        onChange={(e) => setValueEmail(e.target.value)}
        onBlur={handleBlurEmail}
      />
      {toggleEmail && <span>Email kh??ng ????ng</span>}
      <strong>M???t kh???u *</strong>
      <input
        value={valuePassword}
        onChange={(e) => setValuePassword(e.target.value)}
        onBlur={handleBlurPass}
        type="text"
      />
      {togglePassword && <span>M???t kh???u t???i thi???u c?? 6 k?? t???</span>}
      <strong>Nh???p l???i m???t kh???u *</strong>
      <input
        type="password"
        value={valuePassword2}
        onChange={(e) => setValuePassword2(e.target.value)}
        onBlur={handleBlurPass2}
      />
      {togglePassword2 && <span>M???t kh???u kh??ng tr??ng kh???p</span>}
      <Button variant="danger" onClick={updateUsers}>
        ????NG K??
      </Button>
    </div>
  );
}

export default Singupmobile;
