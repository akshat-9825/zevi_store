import cn from "classnames";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const HomePage = () => {
  return (
    <div>
      <div className={cn(styles.home, "column p-s")}>Home Page</div>
    </div>
  );
};

export default HomePage;
