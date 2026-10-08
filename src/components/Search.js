import styles from "./styles/Search.module.css";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/shoppingSlice";

function Search({
  data = [],
  keywords = ["product_name"],
  onSearch,
  setIsSearching,
}) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  function handleSearch(e) {
    const query = e.target.value;
    setSearchValue(query);

    const res = data.filter((item) =>
      keywords.some((keyword) =>
        String(item[keyword]).toLowerCase().includes(query.toLowerCase()),
      ),
    );

    dispatch(search(res));
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchValue}
        onChange={handleSearch}
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
      />

      <LuSearch />
    </div>
  );
}

export default Search;
