import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SkillCard.css";
import SkillDialog from "./SkillDialog";

const SkillCard = ({ skill, showDialog = false, updateSkillInList, deleteSkillFromList }) => {
  const [showSkillDialog, setShowSkillDialog] = useState(false);

  const imageSrc = skill.image
    ? skill.image
    : `https://skillswaphubbackend.onrender.com/images/${skill.img_name}`;

  const openDialog = () => {
    if (showDialog) {
      setShowSkillDialog(true);
    }
  };

  const closeDialog = () => {
    setShowSkillDialog(false);
  };

  return (
    <>
      {showSkillDialog && showDialog ? (
        <SkillDialog
          closeSkillDialog={closeDialog}
          skill={skill}
          updateSkillInList={updateSkillInList}
          deleteSkillFromList={deleteSkillFromList}
        />
      ) : null}

      <article className="skill-card" onClick={openDialog}>
        <img className="skill-img" src={imageSrc} alt={skill.title} />

        <div className="skill-body">
          <h3 className="skill-title">{skill.title}</h3>
          <div className="skill-category">
            {skill.category} - {skill.level}
          </div>
          <div className="skill-meta">
            {skill.instructor} • {skill.lessons} lessons
          </div>

          <Link
            to={`/viewskills/${skill._id}`}
            className="btn btn-green"
            onClick={(e) => e.stopPropagation()}
          >
            View
          </Link>
        </div>
      </article>
    </>
  );
};

export default SkillCard;