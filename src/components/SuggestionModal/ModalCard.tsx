import { useState } from "react";
import cn from "classnames";
import { ModalCardType } from "../Home/utils";

import styles from "./suggestion-modal.module.scss";
import "@styles/_common.scss";

const ModalCard = ({ imageUrl, title }: ModalCardType) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={cn("column flex-ac cursor", styles.modal_card)}>
      <img
        src={imageUrl}
        className={styles.modal_card_img}
        width="165px"
        height="223px"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      />
      {imageLoaded || imageUrl ? null : (
        <div className={styles.modal_card_skeleton}></div>
      )}
      {title ? (
        <div>{title}</div>
      ) : (
        <div className={styles.modal_card_text_skeleton} />
      )}
    </div>
  );
};

export default ModalCard;
