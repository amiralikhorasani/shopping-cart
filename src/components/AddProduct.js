import { useDispatch } from "react-redux";
import styles from "./styles/AddProduct.module.css";
import Total from "./Total";
import { useState } from "react";
import { add } from "../redux/shoppingSlice";
import toast from "react-hot-toast";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  function handleAdd(e) {
    e.preventDefault();
    dispatch(add({ productName, price }));
    toast.success("Product added successfully!");
    setPrice("");
    setProductName("");
  }

  return (
    <div style={{ display: "block" }}>
      <div className={styles.add_product_container}>
        <form onSubmit={handleAdd}>
          <label>
            <span>Product name: </span>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
          </label>
          <label>
            <span>Price product: </span>
            <input
              type="text"
              onChange={(e) => setPrice(+e.target.value)}
              value={price}
            />
          </label>
          <button className={styles.button}>Add</button>
        </form>
      </div>
      <Total />
    </div>
  );
}

export default AddProduct;
