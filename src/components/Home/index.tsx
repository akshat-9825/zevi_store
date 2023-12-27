import { useEffect, useState } from "react";
import cn from "classnames";
import axios from "axios";

import styles from "./index.module.scss";
import "@styles/_common.scss";
import SearchBar from "../SearchBar";

const HomePage = () => {
  const [focused, setFocused] = useState(true);
  const [trendingData, setTrendingData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const getTrendingData = async () => {
    const limit = 5;
    await axios
      .get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => {
        setTrendingData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSuggestions = async () => {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setFocused(false);
    getTrendingData();
    getSuggestions();
  }, []);

  return (
    <div className={cn(styles.home_page_container, styles.overlay)}>
      {/* Background overlay effect */}
      <img
        src="images/background_img.jpg"
        alt="background"
        className={styles.background}
      />
      <img
        src="images/zevi_logo.svg"
        alt="logo"
        className={cn(styles.logo, "absolute cursor")}
        onClick={() => window.location.reload()}
      />
      <SearchBar
        trendingData={trendingData}
        suggestions={suggestions}
        focused={focused}
        setFocused={setFocused}
      />
    </div>
  );
};

export default HomePage;
