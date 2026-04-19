import { useState } from "react";

const API_URL = "https://skillswaphubbackend.onrender.com/api/skills";

const SkillDeleteDialog = ({ skill, closeDeleteDialog, deleteSkillFromList }) => {
  const [result, setResult] = useState("");

  const deleteSkill = async () => {
    setResult("Sending...");

    try {
      const response = await fetch(`${API_URL}/${skill._id}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        setResult("Successfully deleted");
        deleteSkillFromList(skill);
        closeDeleteDialog();
      } else {
        setResult("Unsuccessful delete");
      }
    } catch (err) {
      setResult("Unsuccessful delete");
    }
  };

  return (
    <div className="delete-skill-wrap">
      <div className="delete-skill-grid">
        <div className="delete-skill-main">
          <h2>Delete Skill</h2>
          <p className="delete-skill-subtitle">
            Are you sure you want to delete this skill?
          </p>

          <div className="delete-skill-summary">
            <h3>{skill.title}</h3>
            <p>
              <strong>Category:</strong> {skill.category}
            </p>
            <p>
              <strong>Level:</strong> {skill.level}
            </p>
            <p>
              <strong>Instructor:</strong> {skill.instructor}
            </p>
          </div>

          <div className="delete-skill-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeDeleteDialog}
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-primary delete-confirm-btn"
              onClick={deleteSkill}
            >
              Delete Skill
            </button>
          </div>

          <p className="delete-skill-result" aria-live="polite">
            {result}
          </p>
        </div>

        <div className="delete-skill-preview">
          <h3>Preview</h3>
          <img
            src={`https://skillswaphubbackend.onrender.com/images/${skill.img_name}`}
            alt={skill.title}
          />
          <p>This skill will be permanently removed from the list.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillDeleteDialog;