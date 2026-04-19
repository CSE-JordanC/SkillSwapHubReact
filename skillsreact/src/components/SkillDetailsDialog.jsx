const SkillDetailsDialog = ({ skill, showEdit, showDelete }) => {
    return (
      <div className="columns">
        <img
          src={`https://skillswaphubbackend.onrender.com/images/${skill.img_name}`}
          alt={skill.title}
        />
  
        <div id="dialog-content">
          <div className="dialog-header">
            <h3>{skill.title}</h3>
  
            <div className="dialog-actions">
              <button
                className="edit-btn"
                onClick={showEdit}
                type="button"
                aria-label="Edit skill"
              >
                &#9998;
              </button>
  
              <button
                className="delete-btn"
                onClick={showDelete}
                type="button"
                aria-label="Delete skill"
              >
                &#128465;
              </button>
            </div>
          </div>
  
          <p>
            <strong>Category:</strong> {skill.category}
          </p>
          <p>
            <strong>Level:</strong> {skill.level}
          </p>
          <p>
            <strong>Lessons:</strong> {skill.lessons}
          </p>
          <p>
            <strong>Instructor:</strong> {skill.instructor}
          </p>
          <p>{skill.description}</p>
        </div>
      </div>
    );
  };
  
  export default SkillDetailsDialog;