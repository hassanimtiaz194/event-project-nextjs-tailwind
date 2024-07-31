import { FC } from "react";
import { IEventItem, IEventList } from "../../../common-utils/event.types";
import Link from "next/link";
import dayjs from "dayjs";
import classes from "../../../common-utils/styles.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

const EventItem: FC<IEventItem> = ({ title, image, date, location, id }) => {
  const formattedAddress = location?.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  
  return (
    <li
      className={`flex flex-col gap-6 h-[100%] md:flex-row md:h-80 ${classes.item}`}
    >
      <img
        className={`w-fu;; object-cover h-36 md:h-auto md:w-7/12 md:max-w-[50%] md:min-w-[50%]`}
        src={"/" + image}
        alt={title}
      />
      <div className="flex flex-col justify-between py-8 px-3 flex-grow">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex flex-row gap-2">
            <div className={classes.defaultIconSize}>
              <DateIcon />
            </div>
            <time className="text-lg font-bold text-gray-500">
              {dayjs(date).format("MMMM DD,YYYY")}
            </time>
          </div>
          <div className="flex flex-row gap-4">
            <div className={classes.defaultIconSize}>
              <AddressIcon />
            </div>
            <address className="text-md">{formattedAddress}</address>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <Button link={exploreLink}>Explore Event</Button>{" "}
        </div>
      </div>
    </li>
  );
};

export default EventItem;
