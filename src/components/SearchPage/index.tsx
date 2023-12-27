import cn from "classnames";
import Card from "./Card";
import Filters from "./Filters";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

import styles from "./index.module.scss";
import "@styles/_common.scss";

export default function SearchPage() {
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
        <div className={styles.card_container}>
          <Card />
        </div>
      </div>
    </div>
  );
}
