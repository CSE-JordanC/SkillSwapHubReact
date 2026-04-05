import { Link } from "react-router-dom";
import "../css/SimilarSkillCard.css";

const SimilarSkillCard = ({ image, title, id }) => {
  return (
    <div className="similar-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <Link to={`/viewskills/${id}`} className="btn btn-green">
        View
      </Link>
    </div>
  );
};

export default SimilarSkillCard;