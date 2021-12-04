import styles from "./Account.module.scss";
import { Button } from "react-bootstrap";
import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

function AccountInfor() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const users = JSON.parse(window.localStorage.getItem("users"));

  const [newUser, setNewUser] = useLocalStorage("user", user);
  const [newUsers, setNewUsers] = useLocalStorage("users", users);

  const [firstName, setFirstName] = useState(newUser.fullName.firstName);
  const [lastName, setLastName] = useState(newUser.fullName.lastName);
  const [displayName, setDisplayName] = useState(newUser.fullName.displayName);
  const [email, setEmail] = useState(newUser.email);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");

  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const handle1 = () => {
    setToggle1(password1 !== newUser.password);
  };
  const handle2 = () => {
    setToggle2(password2.trim().length <= 5);
  };
  const handle3 = () => {
    setToggle3(password3 !== password2);
  };
  const handle4 = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const resultEmail = re.test(String(email).toLowerCase());
    setToggle4(!resultEmail);
  };
  const handleSubmit = () => {
    if (
      !toggle1 &&
      !toggle2 &&
      !toggle3 &&
      !toggle4 &&
      firstName.trim().length !== 0 &&
      lastName.trim().length !== 0 &&
      displayName.trim().length !== 0 &&
      email.trim().length !== 0 &&
      password1.trim().length !== 0 &&
      password2.trim().length !== 0 &&
      password3.trim().length !== 0
    ) {
      setNewUser({
        ...newUser,
        fullName: {
          firstName: firstName,
          lastName: lastName,
          displayName: displayName,
        },
        email: email,
        password: password3,
      });
      const el = newUsers.map((el) => {
        if (el.id === newUser.id) {
          el = {
            ...el,
            email: email,
            password: password3,
            fullName: {
              firstName: firstName,
              lastName: lastName,
              displayName: displayName,
            },
          };
        }
        return el;
      });
      setNewUsers(el);
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
        {success && <p className={styles.success}>Cập nhật thành công</p>}
        {err && <p className={styles.err}>Vui lòng nhập đầy đủ thông tin</p>}
        <div className={styles.accountInforName}>
          <div>
            <p>Họ *</p>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.Input}
              placeholder="Họ"
              type="text"
            />
          </div>
          <div>
            <p>Tên *</p>
            <input
              className={styles.Input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Tên"
            />
          </div>
        </div>

        <div>
          <p>Tên hiện thị *</p>
          <input
            style={{ width: "100%" }}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            placeholder="Tên hiện thị"
          />
          <span style={{ color: "#334852" }}>
            Đây sẽ là cách mà tên của bạn sẽ được hiển thị trong phần tài khoản
            và trong phần đánh giá
          </span>
        </div>
        <div>
          <p>Địa chỉ email *</p>
          <input
            style={{ width: "100%" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handle4}
            placeholder="Địa chỉ email"
          />
          {toggle4 && <span>Địa chỉ email không chính xác</span>}
        </div>
        <h5>THAY ĐỔI MẬT KHẨU</h5>
        <div>
          <p>Mật khẩu hiện tại (bỏ trống nếu không đổi)</p>
          <input
            style={{ width: "100%" }}
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            onBlur={handle1}
            type="password"
          />
          {toggle1 && <span>Mật khẩu không đúng</span>}
        </div>
        <div>
          <p>Mật khẩu mới (bỏ trống nếu không đổi)</p>
          <input
            style={{ width: "100%" }}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            onBlur={handle2}
            type="password"
          />
          {toggle2 && <span>Mật khẩu ít nhất có 6 ký tự</span>}
        </div>
        <div>
          <p>Xác nhận mật khẩu mới</p>
          <input
            style={{ width: "100%" }}
            value={password3}
            onChange={(e) => setPassword3(e.target.value)}
            onBlur={handle3}
            type="password"
          />
          {toggle3 && <span>Mật khẩu không trùng khớp</span>}
        </div>
        <Button
          style={{ margin: "20px 0" }}
          onClick={handleSubmit}
          variant="danger"
        >
          LƯU THAY ĐỔI
        </Button>
      </div>
    </>
  );
}

export default AccountInfor;
