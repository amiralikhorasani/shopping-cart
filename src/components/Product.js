import { memo } from "react";
import Quantity from "./Quantity";
import RemoveBtn from "./RemoveBtn";
import styles from "./styles/Product.module.css";
import { IoMdPricetag } from "react-icons/io";

function Product({ obj }) {
  return (
    <li className={styles.product}>
      <div className={styles.info}>
        <div className={styles.title}>
          <span>
            <IoMdPricetag />
          </span>
          <h5 className={styles.text}>{obj.product_name}</h5>
        </div>
        <div className={styles.price}>
          <h6 className={styles.text}>{obj.price}$</h6>
        </div>
      </div>
      <Quantity id={obj.id} quantity={obj.quantity} />
      <RemoveBtn id={obj.id} />
    </li>
  );
}

export default memo(Product);
