import { useSelector } from "react-redux";
import styles from "./styles/Total.module.css";

function Total() {
  const { total } = useSelector((store) => store.shopping);

  return (
    <div className={styles.total}>
      <h2>Total: </h2>
      <h3>{total}$</h3>
    </div>
  );
}

export default Total;
