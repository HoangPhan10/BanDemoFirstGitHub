import { Switch, Route } from "react-router-dom";
import AddCart from "../pages/home/Addcart";
import New1 from "../pages/news/New1";
import New2 from "../pages/news/New2";
import New3 from "../pages/news/New3";
import New4 from "../pages/news/New4";
import New5 from "../pages/news/New5";
import New6 from "../pages/news/New6";
import {
  arrImagesChuck1,
  arrImagesChuck2,
  arrImagesChuck3,
  arrImagesChuck4,
  arrImagesChuck5,
  arrImagesChuck6,
  arrImagesChuck7,
  arrImagesChuck8,
  arrImageSunbaked1,
  arrImageSunbaked2,
  arrImageSunbaked3,
  arrImageSunbaked4,
  arrImageSale1,
  arrImageSale2,
  arrImageSale3,
  arrImageSale4,
  arrImageSale5,
  arrImageSale6,
  arrImageSale7,
  arrImageSale8,
  arrImageOneStar1,
  arrImageOneStar2,
  imageOneStar3,
  imageOneStar4,
  slide5ImageSale,
  arrImageChildren1,
  arrImageChildren2,
  arrImageChildren3,
  arrImageChildren4,
  arrImageChildren5,
  arrImageChildren6,
  imageChuck07s11,
  imageChuck07s21,
  imageChuck07s31,
  arrImageKick1,
  arrImageKick2,
} from "../../../assets/images/home/Cart/shoes/imageShoes";

import {
  t_shirt21,
  balo11,
  balo21,
  balo31,
  jogger1,
  t_shirt11,
  t_shirt31,
  balo41,
  balo42,
  balo43,
  slide5ImageAccessory,
} from "../../../assets/images/home/Cart/accessory/imageAccessory";
import { slide5ImageChidren } from "../../../assets/images/home/Cart/shoes/children/arrImageChildren";
function RoutessShoes() {
  return (
    <div>
      <Switch>
        <Route path="/Cart/Chuck-Taylor-Classic-1">
          <AddCart
            img1={arrImagesChuck1[0]}
            img2={arrImagesChuck1[1]}
            img3={arrImagesChuck1[2]}
            img4={arrImagesChuck1[3]}
            img5={arrImagesChuck1[4]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-2">
          <AddCart
            img1={arrImagesChuck2[0]}
            img2={arrImagesChuck2[1]}
            img3={arrImagesChuck2[2]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-3">
          <AddCart
            img1={arrImagesChuck3[0]}
            img2={arrImagesChuck3[1]}
            img3={arrImagesChuck3[2]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-4">
          <AddCart
            img1={arrImagesChuck4[0]}
            img2={arrImagesChuck4[1]}
            img3={arrImagesChuck4[2]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-5">
          <AddCart
            img1={arrImagesChuck5[0]}
            img2={arrImagesChuck5[1]}
            img3={arrImagesChuck5[2]}
            img4={arrImagesChuck5[3]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-6">
          <AddCart
            img1={arrImagesChuck6[0]}
            img2={arrImagesChuck6[1]}
            img3={arrImagesChuck6[2]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-7">
          <AddCart
            img1={arrImagesChuck7[0]}
            img2={arrImagesChuck7[1]}
            img3={arrImagesChuck7[2]}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-Classic-8">
          <AddCart
            img1={arrImagesChuck8[0]}
            img2={arrImagesChuck8[1]}
            img3={arrImagesChuck8[2]}
            img4={arrImagesChuck8[3]}
          />
        </Route>
        <Route path="/Cart/One-Star-Sunbaked-1">
          <AddCart
            img1={arrImageSunbaked1[0]}
            img2={arrImageSunbaked1[1]}
            img3={arrImageSunbaked1[2]}
            img4={arrImageSunbaked1[3]}
            img5={arrImageSunbaked1[4]}
            img6={arrImageSunbaked1[5]}
          />
        </Route>
        <Route path="/Cart/One-Star-Sunbaked-2">
          <AddCart
            img1={arrImageSunbaked2[0]}
            img2={arrImageSunbaked2[1]}
            img3={arrImageSunbaked2[2]}
            img4={arrImageSunbaked2[3]}
            img5={arrImageSunbaked2[4]}
            img6={arrImageSunbaked2[5]}
          />
        </Route>
        <Route path="/Cart/One-Star-Sunbaked-3">
          <AddCart
            img1={arrImageSunbaked3[0]}
            img2={arrImageSunbaked3[1]}
            img3={arrImageSunbaked3[2]}
            img4={arrImageSunbaked3[3]}
            img5={arrImageSunbaked3[4]}
            img6={arrImageSunbaked3[5]}
          />
        </Route>
        <Route path="/Cart/One-Star-Sunbaked-4">
          <AddCart
            img1={arrImageSunbaked4[0]}
            img2={arrImageSunbaked4[1]}
            img3={arrImageSunbaked4[2]}
            img4={arrImageSunbaked4[3]}
            img5={arrImageSunbaked4[4]}
            img6={arrImageSunbaked4[5]}
          />
        </Route>
        <Route path="/Cart/One-Star-Love-The-Progress-5">
          <AddCart
            img1={arrImageOneStar1[0]}
            img2={arrImageOneStar1[1]}
            img3={arrImageOneStar1[2]}
            img4={arrImageOneStar1[3]}
            img5={arrImageOneStar1[4]}
          />
        </Route>
        <Route path="/Cart/One-Star-Love-The-Progress-6">
          <AddCart
            img1={arrImageOneStar2[0]}
            img2={arrImageOneStar2[1]}
            img3={arrImageOneStar2[2]}
            img4={arrImageOneStar2[3]}
          />
        </Route>
        <Route path="/Cart/One-Star-Love-The-Progress-7">
          <AddCart img1={imageOneStar3} />
        </Route>
        <Route path="/Cart/One-Star-Love-The-Progress-8">
          <AddCart img1={imageOneStar4} />
        </Route>
        {/* ACCESSORY */}
        <Route path="/Cart/Converse-Metal-Cons-Pull-Over-Hoodie">
          <AddCart img1={t_shirt21} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/Converse-X-Suicidal-Tendencies-Long">
          <AddCart img1={t_shirt11} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/Converse-Star-Chevron-Jogger">
          <AddCart img1={jogger1} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/Converse-Collegiate-Text-SS-Tee">
          <AddCart img1={t_shirt31} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/CSport-Duffel">
          <AddCart img1={balo11} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/Lil-Duffel">
          <AddCart img1={balo21} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/Speed-2-Backpack">
          <AddCart img1={balo31} image={slide5ImageAccessory} />
        </Route>
        <Route path="/Cart/Poly-Chuck-Plus-1.0">
          <AddCart
            img1={balo41}
            img2={balo42}
            img3={balo43}
            image={slide5ImageAccessory}
          />
        </Route>
        {/* ACCESSORY SALE */}
        <Route path="/Cart/Cons-PL-76-Foundational-Leather">
          <AddCart
            img1={arrImageSale1[0]}
            img2={arrImageSale1[1]}
            img3={arrImageSale1[2]}
            img4={arrImageSale1[3]}
            img5={arrImageSale1[4]}
            image={slide5ImageSale}
          />
        </Route>
        <Route path="/Cart/Cons-Auckland-Ultra">
          <AddCart img1={arrImageSale2[0]} image={slide5ImageSale} />
        </Route>
        <Route path="/Cart/Break-Point-Foundational-Leather">
          <AddCart
            img1={arrImageSale3[0]}
            img2={arrImageSale3[1]}
            img3={arrImageSale3[2]}
            img4={arrImageSale3[3]}
            image={slide5ImageSale}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-Ox-x-Nike-Flyknit-Multi">
          <AddCart
            img1={arrImageSale4[0]}
            img2={arrImageSale4[1]}
            img3={arrImageSale4[2]}
            img4={arrImageSale4[3]}
            img5={arrImageSale4[4]}
            image={slide5ImageSale}
          />
        </Route>
        <Route path="/Cart/84-Thunderbolt-Breathable-Mesh">
          <AddCart
            img1={arrImageSale5[0]}
            img2={arrImageSale5[1]}
            img3={arrImageSale5[2]}
            img4={arrImageSale5[3]}
            image={slide5ImageSale}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-70-Poplin-Shirt">
          <AddCart
            img1={arrImageSale6[0]}
            img2={arrImageSale6[1]}
            img3={arrImageSale6[2]}
            img4={arrImageSale6[3]}
            img5={arrImageSale6[4]}
            image={slide5ImageSale}
          />
        </Route>
        <Route path="/Cart/One-Star-Pro-OG-Update">
          <AddCart
            img1={arrImageSale7[0]}
            img2={arrImageSale7[1]}
            img3={arrImageSale7[2]}
            img4={arrImageSale7[3]}
            image={slide5ImageSale}
          />
        </Route>
        <Route path="/Cart/Jack-Purcell-Pro">
          <AddCart
            img1={arrImageSale8[0]}
            img2={arrImageSale8[1]}
            img3={arrImageSale8[2]}
            img4={arrImageSale8[3]}
            img5={arrImageSale8[4]}
            image={slide5ImageSale}
          />
        </Route>
        {/* NEWS */}
        <Route path="/new-1">
          <New1 />
        </Route>
        <Route path="/new-2">
          <New2 />
        </Route>
        <Route path="/new-3">
          <New3 />
        </Route>
        <Route path="/new-4">
          <New4 />
        </Route>
        <Route path="/new-5">
          <New5 />
        </Route>
        <Route path="/new-6">
          <New6 />
        </Route>

        {/* CHILDREN */}
        <Route path="/Cart/Chuck-Taylor-All-Star-Creatures-Boston-x-London-Transport">
          <AddCart
            img1={arrImageChildren1[0]}
            img2={arrImageChildren1[1]}
            img3={arrImageChildren1[2]}
            img4={arrImageChildren1[3]}
            img5={arrImageChildren1[4]}
            image={slide5ImageChidren}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Boston-x-London-Transport">
          <AddCart img1={arrImageChildren2[0]} image={slide5ImageChidren} />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Gaming-Camo">
          <AddCart
            img1={arrImageChildren3[0]}
            img2={arrImageChildren3[1]}
            img3={arrImageChildren3[2]}
            img4={arrImageChildren3[3]}
            image={slide5ImageChidren}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Summer-Fundamentals">
          <AddCart
            img1={arrImageChildren4[0]}
            img2={arrImageChildren4[1]}
            img3={arrImageChildren4[2]}
            img4={arrImageChildren4[3]}
            image={slide5ImageChidren}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Summer-Fundamentals-2">
          <AddCart
            img1={arrImageChildren5[0]}
            img2={arrImageChildren5[1]}
            img3={arrImageChildren5[2]}
            img4={arrImageChildren5[3]}
            img5={arrImageChildren5[4]}
            image={slide5ImageChidren}
          />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-Simple-Step-Watermelon">
          <AddCart
            img1={arrImageChildren6[0]}
            img2={arrImageChildren6[1]}
            img3={arrImageChildren6[2]}
            img4={arrImageChildren6[3]}
            img5={arrImageChildren6[4]}
            image={slide5ImageChidren}
          />
        </Route>
        {/* CHUCK 07S */}
        <Route path="/Cart/Chuck-70-Archive-Prints">
          <AddCart img1={imageChuck07s11} />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-70-Full-Gator">
          <AddCart img1={imageChuck07s21} />
        </Route>
        <Route path="/Cart/Chuck-Taylor-All-Star-70-Pastel-Leather">
          <AddCart img1={imageChuck07s31} />
        </Route>
        {/* PSY-KICKS */}
        <Route path="/Cart/Chuck-70-Psy-Kicks-Ox-1">
          <AddCart
            img1={arrImageKick1[0]}
            img2={arrImageKick1[1]}
            img3={arrImageKick1[2]}
            img4={arrImageKick1[3]}
            img5={arrImageKick1[4]}
            img6={arrImageKick1[5]}
          />
        </Route>
        <Route path="/Cart/Chuck-70-Psy-Kicks-Ox-2">
          <AddCart
            img1={arrImageKick2[0]}
            img2={arrImageKick2[1]}
            img3={arrImageKick2[2]}
            img4={arrImageKick2[3]}
            img5={arrImageKick2[4]}
            img6={arrImageKick2[5]}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default RoutessShoes;
