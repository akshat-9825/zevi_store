import { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Product } from "../Home/utils";
import ModalCard from "./ModalCard";

import styles from "./suggestion-modal.module.scss";
import "@styles/_common.scss";

const SuggestionModal = ({
  data,
  suggestions,
}: {
  data: Product[] | undefined;
  suggestions: string[] | undefined;
}) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const elementWidth = modalRef.current
      ? (modalRef.current as HTMLElement).getBoundingClientRect().width
      : 0;
    if (elementWidth) {
      setLimit(elementWidth >= 1025 ? 5 : 4);
    }
  }, []);

  const handleSuggestionClick = useCallback(
    (query: string) => {
      if (query.trim() !== "") {
        navigate(`/search?category=${encodeURIComponent(query)}`);
      }
    },
    [navigate]
  );

  return (
    <div
      ref={modalRef}
      className={cn("column p-l absolute", styles.modal_container)}>
      <div className="column">
        Latest Trends
        <div className={cn("row m-t-s", styles.modal_card_container)}>
          {data &&
            data
              .slice(0, limit)
              .map(
                ({
                  id,
                  thumbnail,
                  title,
                }: {
                  id: number;
                  thumbnail: string;
                  title: string;
                }) => {
                  return (
                    <div key={id}>
                      <ModalCard imageUrl={thumbnail} title={title} />
                    </div>
                  );
                }
              )}
        </div>
      </div>
      <div className="column">
        Popular suggestions
        <div className={cn(styles.suggestions, "cursor column m-t-s")}>
          {suggestions &&
            suggestions.slice(0, 5).map((suggestion: string) => {
              return (
                <div
                  className="h4"
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SuggestionModal;
