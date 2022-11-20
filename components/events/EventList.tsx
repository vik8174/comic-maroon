import EventItem from "./EventItem";

function EventList({ data }: { data: any[] }) {
  return (
    <ul>
      {data.map((eventData) => (
        <EventItem
          key={eventData.key}
          id={eventData.id}
          title={eventData.title}
          location={eventData.location}
          date={eventData.date}
          image={eventData.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
