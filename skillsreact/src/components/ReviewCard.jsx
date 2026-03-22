import "../css/ReviewCard.css";

const ReviewCard = ({ name, rating, text }) => {
  return (
    <div className="review">
      <strong>{name}</strong> {rating}
      <p>{text}</p>
    </div>
  );
};

export default ReviewCard;