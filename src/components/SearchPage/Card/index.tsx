import cn from "classnames";
import { HeartIcon } from "@/assets/icons/HeartIcon";
import { useState } from "react";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const Card = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={cn("column", styles.card_container)}>
      <div className="m-b-s relative">
        <HeartIcon
          onClick={() => setLiked(!liked)}
          stroke={liked ? "red" : "white"}
          className={cn("absolute cursor", styles.card_heart_icon, {
            [styles.card_heart_icon_liked]: liked,
          })}
        />
        <img
          src="images/image-unavailable.jpg"
          alt="card"
          height={325}
          width={239}
          className={styles.card_img}
        />
      </div>
      <div className={cn(styles.card_details, "column space-around")}>
        <div className={styles.card_title}>Card Title</div>
        <div className={cn(styles.card_price, "row")}>
          <div className={styles.original_price}> original</div>
          <div className={styles.discounted_price}>discounted</div>
        </div>
        <div className={styles.card_rating}>Card Rating</div>
      </div>
    </div>
  );
};

export default Card;
