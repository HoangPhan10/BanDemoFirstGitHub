import { arrImagesChuck1 } from "./classic/chuckClassic1/imageChuckBlack1";
import { arrImagesChuck2 } from "./classic/chuckClassic2/imageChuckClassic2";
import { arrImagesChuck3 } from "./classic/chuckClassic3/imageChuckClassic3";
import { arrImagesChuck4 } from "./classic/chuckClassic4/imageChuckClassic4";
import { arrImagesChuck5 } from "./classic/chuckClassic5/imageChuckClassic5";
import { arrImagesChuck6 } from "./classic/chuckClassic6/imageChuckClassic6";
import { arrImagesChuck7 } from "./classic/chuckClassic7/imageChuckClassic7";
import { arrImagesChuck8 } from "./classic/chuckClassic8/imageChuckClassic8";
import { arrImageOneStar1 } from "./onestar/onestar1/imageOneStar1";
import { arrImageOneStar2 } from "./onestar/onestar2/imageOneStar2";
import imageOneStar3 from "./onestar/onestar3/women-onestar-3-600x384.jpg";
import imageOneStar4 from "./onestar/onestar4/women-onestar-4-600x384.jpg";
import { arrImageSunbaked1 } from "./sunbaked/sunbaked1/imageSunbaked1";
import { arrImageSunbaked2 } from "./sunbaked/sunbaked2/imageSunbaked2";
import { arrImageSunbaked3 } from "./sunbaked/sunbaked3/imageSunbaked3";
import { arrImageSunbaked4 } from "./sunbaked/sunbaked4/imageSunbaked4";
import { slide5ImageSale } from "./saleoff/arrImageSaleOff";
import { arrImageSale1 } from "./saleoff/saleoff1/arrImageSale1";
import { arrImageSale2 } from "./saleoff/saleoff2/arrImageSale2";
import { arrImageSale3 } from "./saleoff/saleoff3/arrImageSale3";
import { arrImageSale4 } from "./saleoff/saleoff4/arrImageSale4";
import { arrImageSale5 } from "./saleoff/saleoff5/arrImageSale5";
import { arrImageSale6 } from "./saleoff/saleoff6/arrImageSale6";
import { arrImageSale7 } from "./saleoff/saleoff7/arrImageSale7";
import { arrImageSale8 } from "./saleoff/saleoff8/arrImageSale8";
import {
  arrImageChildren1,
  arrImageChildren2,
  arrImageChildren3,
  arrImageChildren4,
  arrImageChildren5,
  arrImageChildren6,
} from "./children/arrImageChildren";
import {
  imageChuck07s11,
  imageChuck07s21,
  imageChuck07s31,
} from "./chuck07s/arrImageChuck07s";
import { arrImageKick1, arrImageKick2 } from "./psykicks/arrImageKick";
import { arrImageAccessory} from '../accessory/imageAccessory'
import { arrImageChildren } from "./children/arrImageChildren";
import { arrImageClassic } from "./classic/arrImageClassic";
import { arrImageSunbaked } from "./sunbaked/arrImageSunbaked";
import { arrImageOneStar } from "./onestar/arrImageOneStar";
import { arrImageChuck07s } from "./chuck07s/arrImageChuck07s";
import { arrImageKick } from "./psykicks/arrImageKick";
export const arrImageLayout = [
  {
    name: "Chuck Taylor Classic",
    img: arrImagesChuck1[0],
    price: "1,250,000",
    url: "/Cart/Chuck-Taylor-Classic-1",
  },
  {
    name: "Chuck Taylor Classic",
    img: arrImagesChuck6[2],
    price: "1,250,000",
    url: "/Cart/Chuck-Taylor-Classic-6",
  },
  {
    name: "One Star Love The Progress",
    img: arrImageOneStar1[0],
    price: "1,250,000",
    url: "/Cart/One-Star-Love-The-Progress-5",
  },
  {
    name: "One Star Sunbaked",
    img: arrImageSunbaked1[0],
    price: "1,250,000",
    url: "/Cart/One-Star-Sunbaked-1",
  },
  {
    name: "One Star Sunbaked",
    img: arrImageSunbaked2[0],
    price: "1,250,000",
    url: "/Cart/One-Star-Sunbaked-2",
  },
];
export {
  arrImagesChuck1,
  arrImagesChuck2,
  arrImagesChuck3,
  arrImagesChuck4,
  arrImagesChuck5,
  arrImagesChuck6,
  arrImagesChuck7,
  arrImagesChuck8,
};
export {
  arrImageSunbaked1,
  arrImageSunbaked2,
  arrImageSunbaked3,
  arrImageSunbaked4,
};
export {
  arrImageSale1,
  arrImageSale2,
  arrImageSale3,
  arrImageSale4,
  arrImageSale5,
  arrImageSale6,
  arrImageSale7,
  arrImageSale8,
};
export {
  arrImageOneStar1,
  arrImageOneStar2,
  imageOneStar3,
  imageOneStar4,
  slide5ImageSale,
};

export {
  arrImageChildren1,
  arrImageChildren2,
  arrImageChildren3,
  arrImageChildren4,
  arrImageChildren5,
  arrImageChildren6,
};
export { imageChuck07s11, imageChuck07s21, imageChuck07s31 };
export { arrImageKick1, arrImageKick2 };
export const arrImageShoes =[
  ...arrImageAccessory,...arrImageChildren,...arrImageChuck07s,...arrImageClassic,...arrImageKick,...arrImageOneStar,...arrImageSunbaked
]
export {arrImageAccessory,arrImageChildren,arrImageChuck07s,arrImageClassic,arrImageKick,arrImageOneStar,arrImageSunbaked}