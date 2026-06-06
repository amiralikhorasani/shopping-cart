import { useDispatch } from "react-redux";
import styles from "./styles/Quantity.module.css";
import { decQuantity, incQuantity } from "../redux/shoppingSlice";

function Quantity({ id, quantity }) {
  const dispatch = useDispatch();

  function handleInc() {
    dispatch(incQuantity(id));
  }

  function handleDec() {
    if (quantity === 1) return;
    dispatch(decQuantity(id));
  }

  return (
    <div className={styles.quantity}>
      <button onClick={handleDec}>-</button>
      <h6>{quantity}</h6>
      <button onClick={handleInc}>+</button>
    </div>
  );
}

export default Quantity;
