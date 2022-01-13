import { BrowserRouter as Router } from "react-router-dom";
import image from "../../../assets/images/home/logo-mona.png";
import clsx from "clsx";
import styles from "../styles/Navbar.module.scss";
import Singup from "../pages/account/singup";
import Routess from "../Route/Routess";
import Cart from "../pages/account/Cart";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import Footer from "../pages/home/Footer";
function NavbarCompt() {
  return (
    <>
      <Router>
        <section className={styles.navbar}>
          <div className={styles.header} style={{ width: "100%" }}>
            <div className={clsx(styles.headerLogSing)}>
              <Singup />
            </div>
            <img
              height="60px"
              width="140px"
              className={styles.headerLogo}
              src={image}
              alt="logo"
            />
            <Cart />
          </div>
          <div className={clsx(styles.headerNav)}>
            {/* MOBILE */}
            <NavbarMobile />
            <NavbarDesktop />
          </div>
        </section>
     
        <Routess />
        <div>
        <Footer />
        </div>
        
      </Router>
    </>
  );
}

export default NavbarCompt;
