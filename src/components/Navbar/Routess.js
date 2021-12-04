import { Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Accessory from "./pages/accessory/Accessory";
import Home from "./pages/home/Home";
import Introduce from "./pages/introduce/Introduce";
import News from "./pages/news/News";
import Children from "./pages/children/Children";
import Address from "./pages/account/Address";
import Dashboard from "./pages/account/Dashboard";
import AccountInfor from "./pages/account/AccountInfor";
import Dowload from "./pages/account/Dowload";
import Order from "./pages/account/Order";
import DetailOrder from "./pages/account/DetailOrder";
import Singupmobile from "./pages/account/singupmobile";
import AddCart from "./pages/home/Addcart"
function Routess() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/introduce">
          <Introduce />
        </Route>
        <Route path="/children">
          <Children />
        </Route>
        <Route path="/accessory">
          <Accessory />
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
        <Route path="/addcart">
          <AddCart />
        </Route>
      </Switch>
    </div>
  );
}

export default Routess;
