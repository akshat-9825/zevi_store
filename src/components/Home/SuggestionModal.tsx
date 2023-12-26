import cn from "classnames";

import styles from "./suggestion-modal.module.scss";
import "@styles/_common.scss";

const SuggestionModal = () => {
  return (
    <div className={cn("column p-l absolute", styles.modal_container)}>Yo</div>
  );
};

export default SuggestionModal;
