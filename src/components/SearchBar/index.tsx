import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
    }, 500);
  }, [setFocused]);

  const inputRef = useRef(null);

  const handleSearch = useCallback(() => {
    if (
      inputRef.current &&
      (inputRef.current as HTMLInputElement).value !== ""
    ) {
      const query = (inputRef.current as HTMLInputElement).value;
      if (query.trim() !== "") {
        navigate(`/search?query=${encodeURIComponent(query)}`);
      }
    }
  }, [navigate]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div
      className={cn("row flex-c relative", styles.search_container, className)}>
      <input
        className={cn(styles.search_bar, searchBarClassName, "full-width")}
        placeholder="Search"
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon
        onClick={handleSearch}
        className={cn(styles.search_icon, iconClassName, "absolute cursor")}
      />
      {isModalVisible && focused ? (
        <SuggestionModal data={trendingData} suggestions={suggestions} />
      ) : null}
    </div>
  );
};

export default SearchBar;
