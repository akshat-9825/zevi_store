import { useCallback, useState } from "react";
import cn from "classnames";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import SuggestionModal from "./SuggestionModal";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const HomePage = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
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
      <div className={cn("row flex-c relative", styles.search_container)}>
        <input
          className={cn(styles.search_bar, "full-width")}
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SearchIcon className={cn(styles.search_icon, "absolute cursor")} />
        {focused ? <SuggestionModal /> : null}
      </div>
    </div>
  );
};

export default HomePage;
