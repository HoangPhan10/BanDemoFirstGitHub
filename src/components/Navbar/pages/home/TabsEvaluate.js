import styles from "./home.module.scss";
import { useEffect, useState, useRef } from "react";
import "react-slideshow-image/dist/styles.css";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Spinner } from "react-bootstrap";
import CallApi from "../../../api/callApi";
import imageUser from "../../../../assets/images/home/user.png";
import GetRating from "./GetRating";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsEvaluate() {
  const [value, setValue] = useState(0);
  const [valueRate, setValueRate] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const id = window.location.href.split("Cart/")[1];
  const [evaluate, setEvaluate] = useState({});
  const idUser = JSON.parse(window.localStorage.getItem("id"));
  const [user, setUser] = useState({});
  const inputRef = useRef();
  const handleSend = () => {
    if (valueInput.trim().length !== 0) {
      CallApi(`evaluates/${id}`, "POST", {
        user: user.fullName.displayName || user.email.split("@")[0],
        comment: valueInput,
        rate: valueRate,
      }).then((res) => {
        if (res) {
          setEvaluate(res.data);
        }
      });
      inputRef.current.focus();
      setValueInput("");
      setValueRate(0);
    }
  };
  useEffect(() => {
    CallApi(`users/${idUser}`, "GET", null).then((res) => {
      if (res) {
        setUser(res.data);
      }
    });
  }, [idUser]);
  useEffect(() => {
    CallApi(`evaluates/${id}`, "GET", null).then((res) => {
      if (res) {
        setEvaluate(res.data);
      }
    });
  }, [id]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.box2} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className={styles.tab2}
            label="Thông tin bổ sung"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tab2}
            label="ĐÁNH GIÁ SẢN PHẨM"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel className={styles.tabPanel2} value={value} index={0}>
        <div>
          <strong>SKU</strong>
          <span style={{ paddingLeft: 550 }}>{evaluate.SKU}</span>
        </div>
        <div>
          <strong>CHẤT LIỆU</strong>
          <span>{evaluate.material}</span>
        </div>
        <div>
          <strong>GIỚI TÍNH</strong>
          <span style={{ paddingLeft: 520 }}>{evaluate.gender}</span>
        </div>
      </TabPanel>
      <TabPanel className={styles.tabPanel3} value={value} index={1}>
        <strong>NHẬP ĐÁNH GIÁ</strong>
        <div className={styles.Input}>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={valueRate}
              onChange={(event, newValue) => {
                setValueRate(newValue);
              }}
            />
          </Box>
          <div>
            <img src={imageUser} alt="" />
            <input
              placeholder="Nhập đánh giá"
              value={valueInput}
              ref={inputRef}
              onChange={(e) => setValueInput(e.target.value)}
            />

            <Button variant="contained" onClick={handleSend}>
              GỬI
            </Button>
          </div>
        </div>

        {!evaluate.comments && (
          <div>
            <Spinner animation="border" />
          </div>
        )}
        {evaluate.comments && (
          <div>
            <strong>ĐÁNH GIÁ ({evaluate.comments.length})</strong>
            {evaluate.comments.length === 0 && (
              <div> Chưa có đánh giá nào.</div>
            )}
            {evaluate.comments.length !== 0 && (
              <div className={styles.comments}>
                {evaluate.comments.map((el, index) => (
                  <div className={styles.evaluate} key={index}>
                    {" "}
                    <img src={imageUser} alt="" />
                    <div>
                      <strong>{el.user}</strong>
                      <GetRating value={el.rate} />
                      <p>{el.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </TabPanel>
    </Box>
  );
}
