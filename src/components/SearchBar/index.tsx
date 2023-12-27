import { Dispatch, SetStateAction, useCallback } from "react";
import cn from "classnames";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Product } from "../Home/utils";
import SuggestionModal from "../SuggestionModal/SuggestionModal";

import styles from "./index.module.scss";
import "@styles/_common.scss";

interface SearchBarProps {
  isModalVisible: boolean;
  trendingData?: Product[];
  suggestions?: string[];
  focused?: boolean;
  setFocused?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  searchBarClassName?: string;
  iconClassName?: string;
}
const SearchBar = ({
  isModalVisible = true,
  trendingData,
  suggestions,
  focused,
  setFocused,
  className,
  searchBarClassName,
  iconClassName,
}: SearchBarProps) => {
  const handleFocus = useCallback(() => {
    if (setFocused) {
      setFocused(true);
    }
  }, [setFocused]);

  const handleBlur = useCallback(() => {
    setTimeout(() => {
      if (setFocused) {
        setFocused(false);
      }
    }, 1500);
  }, [setFocused]);

  return (
    <div
      className={cn("row flex-c relative", styles.search_container, className)}>
      <input
        className={cn(styles.search_bar, searchBarClassName, "full-width")}
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchIcon
        className={cn(styles.search_icon, iconClassName, "absolute cursor")}
      />
      {isModalVisible && focused ? (
        <SuggestionModal data={trendingData} suggestions={suggestions} />
      ) : null}
    </div>
  );
};

export default SearchBar;
