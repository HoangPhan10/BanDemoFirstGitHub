import { IoSearchSharp } from "react-icons/io5";
import { CgFormatSlash } from "react-icons/cg";
import { BsCartPlus } from "react-icons/bs";
import styles from "./Account.module.scss";

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.Search}>
        <IoSearchSharp className={styles.cartSearch} />
        <div className={styles.hoverSearch}>
          <input placeholder="Tìm kiếm" />
          <button>
            <IoSearchSharp />
          </button>
        </div>
      </div>
      <div className={styles.cartPrice}>
        <p>GIỎ HÀNG</p> <CgFormatSlash className={styles.cgFormatSlash} />
        <span>0 đ</span>
        <BsCartPlus className={styles.bsCartPlus} />
        <div className={styles.hoverCart}>
          <p>Chưa có sản phẩm trong giỏ hàng</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
