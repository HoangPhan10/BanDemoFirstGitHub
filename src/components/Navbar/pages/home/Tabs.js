import styles from "./home.module.scss";
import "react-slideshow-image/dist/styles.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slide4Image from "./Slide4Image";
import Slide2Image from "./Slide2Image";
import {
  slideImages,
  slideImages2,
  slideImages2Mobile,
  slideImagesMobile,
} from "../../../../assets/images/home/Product/imageProduct";

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
        <Box sx={{ p: 3 }}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.BasicTabs} sx={{ width: "100%" }}>
      <Box
        className={styles.box}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className={styles.tab} label="SẢN PHẨM MỚI" {...a11yProps(0)} />
          <Tab
            className={styles.tab}
            label="SẢN PHẨM BÁN CHẠY"
            {...a11yProps(1)}
          />
          <Tab
            label="SẢN PHẨM PHỔ BIẾN"
            className={styles.tab2}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel className={styles.tabPanel} value={value} index={0}>
        <Slide4Image slide={slideImages} />
        <Slide2Image slide={slideImagesMobile} />
      </TabPanel>
      <TabPanel className={styles.tabPanel} value={value} index={1}>
        <Slide4Image slide={slideImages2} />
        <Slide2Image slide={slideImages2Mobile} />
      </TabPanel>
      <TabPanel className={styles.tabPanel} value={value} index={2}>
        <Slide4Image slide={slideImages} />
      </TabPanel>
    </Box>
  );
}
