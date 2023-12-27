import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { ChevronDown } from "@/assets/icons/ChevronDown";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const FilterItem = ({ title, data }: { title: string; data: string[] }) => {
  const [expand, setExpand] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = useCallback(
    (item: string) => {
      if (selectedItem === item) {
        setSelectedItem("");
        navigate("/search");
      } else {
        setSelectedItem(item);
        navigate(`/search?category=${encodeURIComponent(item.toLowerCase())}`);
      }
    },
    [navigate, selectedItem]
  );

  return (
    <div className={cn(styles.filter, "column")}>
      <div
        className="row flex-ac space-between cursor"
        onClick={() => setExpand(!expand)}>
        <div className={styles.filter_item_title}>{title}</div>
        <ChevronDown className="m-r-xs" />
      </div>
      {expand ? (
        <div className={cn(styles.filter_items, "column")}>
          <form>
            {data.map((item, index) => {
              return (
                <div className={cn(styles.filter_item, "row")} key={index}>
                  <input
                    onChange={() => handleCheckboxChange(item)}
                    checked={selectedItem === item}
                    type="checkbox"
                  />
                  <div>{item}</div>
                </div>
              );
            })}
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default FilterItem;
