import { useSelector } from "react-redux";
import Product from "./Product";

import styles from "./styles/Products.module.css";
import Search from "./Search";
import { useState } from "react";

function Products() {
  const { carts, results } = useSelector((store) => store.shopping);
  const [isSearching, setIsSearching] = useState(false);
  const finalCarts = isSearching ? results : carts;

  return (
    <div className={styles.products}>
      <Search
        data={carts}
        keywords={["product_name"]}
        setIsSearching={setIsSearching}
      />
      <ul>
        {finalCarts.map((cart) => (
          <Product key={cart.id} obj={cart} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
