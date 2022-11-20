import EventItem from "./EventItem";
import styles from "./event-list.module.css";

function EventList({ data }: { data: any[] }) {
  return (
    <ul className={styles.lilst}>
      {data.map((eventData) => (
        <EventItem
          date={eventData.date}
          id={eventData.id}
          image={eventData.image}
          key={eventData.key}
          location={eventData.location}
          title={eventData.title}
        />
      ))}
    </ul>
  );
}

export default EventList;
