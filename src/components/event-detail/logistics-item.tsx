import { FC } from "react";
import { ILogisticsItem } from "../../../common-utils/event.types";
import classes from "../../../common-utils/styles.module.css";

const LogisticsItem: FC<ILogisticsItem> = ({ icon: Icon, children }) => {

  return (
    <li className={classes.eventDetailItem}>
      <span className={classes.eventDetailIcon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
