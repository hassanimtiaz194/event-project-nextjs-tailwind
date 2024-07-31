import { FC } from "react";
import { IEventItem } from "../../../common-utils/event.types";
import classes from "../../../common-utils/styles.module.css";

const EventSummary: FC<IEventItem> = ({ title }) => {
  return (
    <section className={classes.eventDetailSummary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
