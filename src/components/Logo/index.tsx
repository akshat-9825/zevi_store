import cn from "classnames";

import styles from "./index.module.scss";
import "@styles/_common.scss";

const Logo = () => {
  return (
    <img
      src="images/zevi_logo.svg"
      alt="logo"
      className={cn(styles.logo, "absolute cursor")}
      onClick={() => window.location.reload()}
    />
  );
};

export default Logo;
