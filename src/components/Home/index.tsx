import cn from "classnames";

import styles from "./index.module.scss";
import "@styles/_common.scss";
import { SearchIcon } from "@/assets/icons/SearchIcon";

const HomePage = () => {
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
      <div className={cn("row flex-c relative", styles.search_container)}>
        <input
          className={cn(styles.search_bar, "full-width")}
          placeholder="Search"
          autoFocus
        />
        <SearchIcon className={cn(styles.search_icon, "absolute cursor")} />
      </div>
    </div>
  );
};

export default HomePage;
