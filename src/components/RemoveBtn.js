import { useDispatch } from "react-redux";
import styles from "./styles/RemoveBtn.module.css";
import { remove } from "../redux/shoppingSlice";

function RemoveBtn({ id }) {
  const dispatch = useDispatch();

  return (
    <button className={styles.button} onClick={() => dispatch(remove(id))}>
      <span>× </span>Delete
    </button>
  );
}

export default RemoveBtn;
