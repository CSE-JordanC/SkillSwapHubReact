import "../css/FeatureCard.css";

const FeatureCard = ({ image, title, text }) => {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};

export default FeatureCard;