import { useSelector } from "react-redux";
import Product from "./Product";

import styles from "./styles/Products.module.css";

function Products() {
  const { carts } = useSelector((store) => store.shopping);

  return (
    <div className={styles.products}>
      <ul>
        {carts.map((cart) => (
          <Product obj={cart} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
