import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import axios from "axios";
import FilterItem from "./FilterItem";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const Filters = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const getAllCategories = useCallback(async () => {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <div className={cn(styles.filters_container, "column")}>
      <div className={cn(styles.filters_title, "m-b-m")}>Search Results</div>
      <FilterItem title="Category" data={categories} />
    </div>
  );
};

export default Filters;
