import AddProduct from "./AddProduct";
import Products from "./Products";

import styles from "./styles/Box.module.css";

function Box() {
  return (
    <section className={styles.box}>
      <AddProduct />
      <Products />
    </section>
  );
}

export default Box;
