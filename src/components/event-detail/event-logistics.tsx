import { FC } from "react";
import { IEventLogistics } from "../../../common-utils/event.types";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "../../../common-utils/styles.module.css";
import dayjs from "dayjs";

const EventLogistics: FC<IEventLogistics> = ({
  date = "",
  address = "",
  image = "",
  imageAlt = "",
}) => {
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.eventDetailLogistics}>
      <div className={classes.eventDetailImage}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.eventDetailList}>
        <LogisticsItem icon={DateIcon}>
          <time>{dayjs(date).format("MMMM DD,YYYY")}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
