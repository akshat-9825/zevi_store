import { useState } from "react";
import cn from "classnames";
import { ChevronDown } from "@/assets/icons/ChevronDown";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const FilterItem = ({ title, data }: { title: string; data: string[] }) => {
  const [expand, setExpand] = useState(true);

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
          {data.map((item, index) => {
            return (
              <div className={styles.filter_item} key={index}>
                <input type="checkbox" />
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FilterItem;
