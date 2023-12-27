import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import cn from "classnames";
import { Product } from "../Home/utils";
import Card from "./Card";
import Filters from "./Filters";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

import styles from "./index.module.scss";
import "@styles/_common.scss";

export default function SearchPage() {
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const searchQuery = queryParams.get("query");
    const searchCategory = queryParams.get("category");
    let api = "https://dummyjson.com/products";
    if (searchQuery) api += `/search?q=${searchQuery}`;
    if (searchCategory) api += `/category/${searchCategory}`;
    axios.get(api).then((res) => setSearchResults(res.data.products));
  }, [queryParams]);

  return (
    <div className={cn(styles.search_page_container)}>
      <SearchBar
        isModalVisible={false}
        className={styles.search_bar_position}
        searchBarClassName={styles.search_bar}
        iconClassName={styles.search_icon}
      />
      <Logo />
      <div className={cn("row", styles.search_page_separation)}>
        <div className={cn(styles.filters_position, "m-t-l m-l-m")}>
          <Filters />
        </div>
        <div className={cn(styles.card_container, "row full-width")}>
          {searchResults.length ? (
            searchResults.map(
              (
                { title, price, discountPercentage, thumbnail, rating },
                index
              ) => {
                return (
                  <div key={index}>
                    <Card
                      title={title}
                      price={price}
                      discount={discountPercentage}
                      imageUrl={thumbnail}
                      rating={rating}
                    />
                  </div>
                );
              }
            )
          ) : (
            <div
              className={cn(
                "row h1 flex-c full-width m-r-xxs",
                styles.no_data_available
              )}>
              No Data Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
