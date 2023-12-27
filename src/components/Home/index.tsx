import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import axios from "axios";
import SearchBar from "../SearchBar";
import Logo from "../Logo";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const HomePage = () => {
  const [focused, setFocused] = useState(true);
  const [trendingData, setTrendingData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const getTrendingData = useCallback(async () => {
    const limit = 5;
    await axios
      .get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => {
        setTrendingData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getSuggestions = useCallback(async () => {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFocused(false);
    getTrendingData();
    getSuggestions();
  }, [getSuggestions, getTrendingData]);

  return (
    <div className={cn(styles.home_page_container, styles.overlay)}>
      <img
        src="images/background_img.jpg"
        alt="background"
        className={styles.background}
      />
      <Logo />
      <SearchBar
        isModalVisible
        trendingData={trendingData}
        suggestions={suggestions}
        focused={focused}
        setFocused={setFocused}
      />
    </div>
  );
};

export default HomePage;
