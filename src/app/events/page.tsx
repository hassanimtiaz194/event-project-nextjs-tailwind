// 'use server'
import EventList from "@/components/events/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventSearch from "@/components/events/event-search";
import { redirect } from "next/navigation";

function EventsPage() { 1
  const events = getAllEvents();

  async function findEventsHandler(year: string, month: string) {
    "use server"; // mark function as a server action (fixes the error)
    const fullPath = `events/${year}/${month}`;
    redirect(fullPath);
  }

  return (
    <>
      <div className="pt-16 pb-5 px-9">
        <EventSearch findEventsHandler={findEventsHandler} />
      </div>
      <div className="flex justify-center pb-16">
        <EventList items={events} />
      </div>
    </>
  );
}

export default EventsPage;
