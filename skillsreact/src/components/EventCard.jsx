import "../css/EventCard.css";

const EventCard = ({ date, title, subtitle }) => {
  return (
    <div className="event-card">
      <div className="event-date">{date}</div>
      <h4 className="event-title">{title}</h4>
      <p className="event-sub">{subtitle}</p>
    </div>
  );
};

export default EventCard;