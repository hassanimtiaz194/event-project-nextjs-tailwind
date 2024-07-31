import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "../../../../dummy-data";

function SlugPage({ params }: any) {
  const year = params?.eventSlug[0];
  const month = params?.eventSlug[1];

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <p className="text-xl font-bold">
        Invalid filter. please adjust your values!
      </p>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (params?.eventSlug && filteredEvents.length === 0) {
    return <p className="text-xl font-bold">No Event!</p>;
  }

  return (
    <div className="flex justify-center py-16">
      <EventList items={filteredEvents} />
    </div>
  );
}

export default SlugPage;
