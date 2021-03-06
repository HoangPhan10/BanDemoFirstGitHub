import styles from "./Account.module.scss";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import CallApi from "../../../api/callApi";
import {re} from "./checkEmail"
function AccountInfor() {
  const id = JSON.parse(window.localStorage.getItem("id"));
  const [passUser, setPassUser] = useState("");
  const [emailUser, setEmailUser] = useState("");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    CallApi("", "GET", null).then((res) => {
      if (res) {
        setUsers(res.data);
      }
    });
    CallApi(`users/${id}`, "GET", null).then((res) => {
      if (res) {
        setFirstName(res.data.fullName.firstName);
        setLastName(res.data.fullName.lastName);
        setDisplayName(res.data.fullName.displayName);
        setPassUser(res.data.password);
        setEmail(res.data.email);
        setEmailUser(res.data.email);
      }
    });
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");

  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  const handle1 = () => {
    setToggle1(password1 !== passUser);
  };
  const handle2 = () => {
    setToggle2(password2.trim().length <= 5);
  };
  const handle3 = () => {
    setToggle3(password3 !== password2);
  };
  const handle4 = () => {
    
    const resultEmail = re.test(String(email).toLowerCase());
    const set = users.find((el) => {
      if (el.email === email && el.email !== emailUser) {
        return true;
      }
      return false;
    });
    setToggle5(set);
    setToggle4(!resultEmail);
  };
  const handleSubmit = () => {
    if (
      !toggle1 &&
      !toggle2 &&
      !toggle3 &&
      !toggle4 &&
      !toggle5 &&
      firstName.trim().length !== 0 &&
      lastName.trim().length !== 0 &&
      displayName.trim().length !== 0 &&
      email.trim().length !== 0 &&
      password1.trim().length !== 0 &&
      password2.trim().length !== 0 &&
      password3.trim().length !== 0
    ) {
      CallApi(`user/${id}`, "POST", {
        email: email,
        password: password3,
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
      }).then((res) => {});
      setSuccess(true);
      setErr(false);
    } else {
      setSuccess(false);
      setErr(true);
    }
  };
  return (
    <>
      <div className={styles.accountInfor}>
        {success && <p className={styles.success}>C???p nh???t th??nh c??ng</p>}
        {err && <p className={styles.err}>Vui l??ng nh???p ?????y ????? th??ng tin</p>}
        <div className={styles.accountInforName}>
          <div>
            <p>H??? *</p>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.Input}
              placeholder="H???"
              type="text"
            />
          </div>
          <div>
            <p>T??n *</p>
            <input
              className={styles.Input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="T??n"
            />
          </div>
        </div>

        <div>
          <p>T??n hi???n th??? *</p>
          <input
            style={{ width: "100%" }}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            placeholder="T??n hi???n th???"
          />
          <span style={{ color: "#334852" }}>
            ????y s??? l?? c??ch m?? t??n c???a b???n s??? ???????c hi???n th??? trong ph???n t??i kho???n
            v?? trong ph???n ????nh gi??
          </span>
        </div>
        <div>
          <p>?????a ch??? email *</p>
          {toggle5 && <span>?????a ch??? email ???? ???????c ????ng k??</span>}
          <input
            style={{ width: "100%" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handle4}
            placeholder="?????a ch??? email"
          />
          {toggle4 && <span>?????a ch??? email kh??ng ch??nh x??c</span>}
        </div>
        <h5>THAY ?????I M???T KH???U</h5>
        <div>
          <p>M???t kh???u hi???n t???i (b??? tr???ng n???u kh??ng ?????i)</p>
          <input
            style={{ width: "100%" }}
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            onBlur={handle1}
            type="password"
          />
          {toggle1 && <span>M???t kh???u kh??ng ????ng</span>}
        </div>
        <div>
          <p>M???t kh???u m???i (b??? tr???ng n???u kh??ng ?????i)</p>
          <input
            style={{ width: "100%" }}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            onBlur={handle2}
            type="password"
          />
          {toggle2 && <span>M???t kh???u ??t nh???t c?? 6 k?? t???</span>}
        </div>
        <div>
          <p>X??c nh???n m???t kh???u m???i</p>
          <input
            style={{ width: "100%" }}
            value={password3}
            onChange={(e) => setPassword3(e.target.value)}
            onBlur={handle3}
            type="password"
          />
          {toggle3 && <span>M???t kh???u kh??ng tr??ng kh???p</span>}
        </div>
        <Button
          style={{ margin: "20px 0" }}
          onClick={handleSubmit}
          variant="danger"
        >
          L??U THAY ?????I
        </Button>
      </div>
    </>
  );
}

export default AccountInfor;
