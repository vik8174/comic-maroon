import Link from "next/link";

function EventItem({
  title,
  image,
  date,
  location,
  id,
}: {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <h2>{title}</h2>

        <div>
          <time>{humanReadableDate}</time>
        </div>

        <div>
          <address>{formattedAddress}</address>
        </div>

        <div>
          <Link href={exploreLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;