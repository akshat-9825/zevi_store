import { Dispatch, SetStateAction, useCallback } from "react";
import cn from "classnames";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Product } from "../Home/utils";
import SuggestionModal from "../Home/SuggestionModal";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const SearchBar = ({
  trendingData,
  suggestions,
  focused,
  setFocused,
  isModalVisible = true,
}: {
  trendingData: Product[];
  suggestions: string[];
  focused: boolean;
  setFocused: Dispatch<SetStateAction<boolean>>;
  isModalVisible?: boolean;
}) => {
  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const handleBlur = useCallback(() => {
    setTimeout(() => {
      setFocused(false);
    }, 1500);
  }, [setFocused]);

  return (
    <div className={cn("row flex-c relative", styles.search_container)}>
      <input
        className={cn(styles.search_bar, "full-width")}
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchIcon className={cn(styles.search_icon, "absolute cursor")} />
      {isModalVisible && focused ? (
        <SuggestionModal data={trendingData} suggestions={suggestions} />
      ) : null}
    </div>
  );
};

export default SearchBar;
