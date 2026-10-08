import { useDispatch } from "react-redux";
import styles from "./styles/RemoveBtn.module.css";
import { remove } from "../redux/shoppingSlice";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

function RemoveBtn({ id }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(remove(id));
    toast.success("Product removed successfully!");
  }

  return (
    <button className={styles.button} onClick={handleRemove}>
      <FiTrash2 />
    </button>
  );
}

export default RemoveBtn;
