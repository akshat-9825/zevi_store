import { Suspense } from "react";
import cn from "classnames";
import { ModalCardType } from "../Home/utils";

import styles from "./suggestion-modal.module.scss";
import "@styles/_common.scss";

const ModalCard = ({ imageUrl, title }: ModalCardType) => {
  return (
    <div className={cn("column flex-ac cursor", styles.modal_card)}>
      <Suspense fallback={<div className={styles.modal_card_skeleton}></div>}>
        <img
          src={imageUrl}
          className={styles.modal_card_img}
          width="165px"
          height="223px"
          loading="lazy"
        />
      </Suspense>
      {title ? (
        <div>{title}</div>
      ) : (
        <div className={styles.modal_card_text_skeleton} />
      )}
    </div>
  );
};

export default ModalCard;
