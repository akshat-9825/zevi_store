import { Suspense, useMemo, useState } from "react";
import cn from "classnames";
import { HeartIcon } from "@/assets/icons/HeartIcon";

import styles from "./index.module.scss";
import "@styles/_common.scss";

interface CardProps {
  imageUrl: string;
  title: string;
  discount: number;
  price: number;
  rating: number;
}

const Card = ({ imageUrl, title, discount, price, rating }: CardProps) => {
  const [liked, setLiked] = useState(false);

  const calculateDiscountedPrice = useMemo(() => {
    return (price - (price * discount) / 100).toFixed(1);
  }, [discount, price]);

  const Loading = () => {
    return (
      <img
        src="images/image-unavailable.jpg"
        alt="card"
        height={325}
        width={239}
        loading="lazy"
        className={styles.card_img}
      />
    );
  };

  return (
    <div className={cn("column cursor", styles.card_container)}>
      <div className="m-b-s relative">
        <HeartIcon
          onClick={() => setLiked(!liked)}
          stroke={liked ? "red" : "gray"}
          className={cn("absolute cursor", styles.card_heart_icon, {
            [styles.card_heart_icon_liked]: liked,
          })}
        />
        <Suspense fallback={<Loading />}>
          <img
            src={imageUrl}
            alt="card"
            height={325}
            width={239}
            loading="lazy"
            className={styles.card_img}
          />
        </Suspense>
      </div>
      <div className={cn(styles.card_details, "column")}>
        <div className={styles.card_title}>{title}</div>
        <div className={cn(styles.card_price, "row")}>
          <div className={styles.original_price}> Rs.{price}</div>
          <div className={styles.discounted_price}>
            Rs.{calculateDiscountedPrice}
          </div>
        </div>
        <div className={styles.card_rating}>Rating: {rating}</div>
      </div>
    </div>
  );
};

export default Card;
