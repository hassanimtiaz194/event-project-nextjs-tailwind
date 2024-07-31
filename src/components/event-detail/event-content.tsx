import { FC } from "react";
import { IEventContent } from "../../../common-utils/event.types";
import classes from "../../../common-utils/styles.module.css";

const EventContent: FC<IEventContent> = ({ children }) => {
  return (
    <section className={classes.eventDetailContent}>{children}</section>
  );
};

export default EventContent;
