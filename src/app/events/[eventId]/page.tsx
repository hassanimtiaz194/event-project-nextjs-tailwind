import { getEventById } from "../../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";

function EventDetailPage({ params }: any) {
  const { eventId } = params;
  const event = getEventById(eventId);

  if (!event) {
    <p className="text-xl font-bold">No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event?.title} />
      <EventLogistics date={event?.date} address={event?.location} image={event?.image} imageAlt={event?.title} />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
