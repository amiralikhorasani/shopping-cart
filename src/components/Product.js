import Quantity from "./Quantity";
import RemoveBtn from "./RemoveBtn";
import styles from "./styles/Product.module.css";

function Product({ obj }) {
  return (
    <li className={styles.product}>
      <div className={styles.info}>
        <div className={styles.title}>
          <span>🛍️</span>
          <h5 className={styles.text}>{obj.product_name}</h5>
        </div>
        <div className={styles.price}>
          <span>💵</span>
          <h6 className={styles.text}>{obj.price}$</h6>
        </div>
      </div>
      <Quantity id={obj.id} quantity={obj.quantity} />
      <RemoveBtn id={obj.id} />
    </li>
  );
}

export default Product;
