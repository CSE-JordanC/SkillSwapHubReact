import { Link } from "react-router-dom";
import "../css/SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <article className="skill-card">
      <img className="skill-img" src={skill.image} alt={skill.title} />
      <div className="skill-body">
        <h3 className="skill-title">{skill.title}</h3>
        <div className="skill-category">
          {skill.category} - {skill.level}
        </div>
        <div className="skill-meta">
          {skill.instructor} • {skill.lessons} lessons
        </div>
        <Link to="/viewskills" className="btn btn-green">
          View
        </Link>
      </div>
    </article>
  );
};

export default SkillCard;