import { FC } from "react";
import { IEventList } from "../../../common-utils/event.types";
import EventItem from "./event-item";

const EventList: FC<IEventList> = ({ items }) => {
  return (
    <ul className="w-1/2 flex flex-col" >
      {items.map((e) => (
        <EventItem
          key={e.id}
          title={e.title}
          image={e.image}
          date={e.date}
          location={e.location}
          id={e.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
