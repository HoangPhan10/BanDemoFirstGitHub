import { Switch, Route } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import LayoutGeneral from "../pages/accessory/LayoutGeneral";
import Home from "../pages/home/Home";
import Introduce from "../pages/introduce/Introduce";
import News from "../pages/news/News";
import Address from "../pages/account/Address";
import Dashboard from "../pages/account/Dashboard";
import AccountInfor from "../pages/account/AccountInfor";
import Dowload from "../pages/account/Dowload";
import Order from "../pages/account/Order";
import DetailOrder from "../pages/account/DetailOrder";
import Singupmobile from "../pages/account/singupmobile";
import ViewCart from "../pages/cart/ViewCart";
import RoutessShoes from "./RoutessShoes&Accessory";
import Payment from "../pages/cart/Payment";
import {
  arrImageAccessory,arrImageChildren,
  arrImageChuck07s,arrImageClassic,
  arrImageKick,arrImageOneStar,
  arrImageSunbaked,arrImageShoes} from '../../../assets/images/home/Cart/shoes/imageShoes'
function Routess() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/introduce">
          <Introduce />
        </Route>
        <Route path="/children">
          <LayoutGeneral title="TRẺ EM" arrImage={arrImageChildren} />
        </Route>
        <Route path="/women/classic">
          <LayoutGeneral title="Classic" arrImage={arrImageClassic} />
        </Route>
        <Route path="/women/sunbaked">
          <LayoutGeneral title="Sunbaked" arrImage={arrImageSunbaked} />
        </Route>
        <Route path="/women/onestar">
          <LayoutGeneral title="One Star" arrImage={arrImageOneStar} />
        </Route>
        <Route path="/women/chuck07s">
          <LayoutGeneral title="Chuck 07S" arrImage={arrImageChuck07s} />
        </Route>
        <Route path="/women/psykicks">
          <LayoutGeneral title="PSY-KICKS" arrImage={arrImageKick} />
        </Route>
        <Route path="/men/classic">
          <LayoutGeneral title="Classic" arrImage={arrImageClassic} />
        </Route>
        <Route path="/men/sunbaked">
          <LayoutGeneral title="Sunbaked" arrImage={arrImageSunbaked} />
        </Route>
        <Route path="/men/onestar">
          <LayoutGeneral title="One Star" arrImage={arrImageOneStar} />
        </Route>
        <Route path="/men/chuck07s">
          <LayoutGeneral title="Chuck 07S" arrImage={arrImageChuck07s} />
        </Route>
        <Route path="/men/psykicks">
          <LayoutGeneral title="PSY-KICKS" arrImage={arrImageKick} />
        </Route>
        <Route path="/accessory">
          <LayoutGeneral title="PHỤ KIỆN KHÁC" arrImage={arrImageAccessory} />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/account/dashboard">
          <Dashboard />
        </Route>
        <Route path="/account/address">
          <Address />
        </Route>
        <Route path="/account/accountInfor">
          <AccountInfor />
        </Route>
        <Route path="/account/order">
          <Order />
        </Route>
        <Route path="/account/detailOrder">
          <DetailOrder />
        </Route>
        <Route path="/account/dowload">
          <Dowload />
        </Route>
        <Route path="/account/singupmobile">
          <Singupmobile />
        </Route>
        <Route path="/viewcart">
          <ViewCart />
        </Route>
        <Route path="/store">
        <LayoutGeneral title="Cửa hàng" arrImage={arrImageShoes}/>
        </Route>
        <Route path="/men">
        <LayoutGeneral title="Nam" arrImage={arrImageShoes}/>
        </Route>
        <Route path="/women">
        <LayoutGeneral title="Nữ" arrImage={arrImageShoes}/>
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>

        {/* SHOES ROUTE */}
        <RoutessShoes />
      </Switch>
    </div>
  );
}

export default Routess;
