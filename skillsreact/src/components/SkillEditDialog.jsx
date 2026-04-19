import { useState } from "react";
import "../css/Dialog.css";

const API_URL = "https://skillswaphubbackend.onrender.com/api/skills";

const SkillEditDialog = ({ skill, closeEditDialog, updateSkillInList }) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState(
    `https://skillswaphubbackend.onrender.com/images/${skill.img_name}`
  );

  const uploadImage = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPrevSrc(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setResult("Sending...");

    const formData = new FormData(form);

    try {
      const response = await fetch(`${API_URL}/${skill._id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult("Skill has been updated");
        updateSkillInList(data);
        closeEditDialog();
      } else {
        setResult(data.error || "Error updating skill");
      }
    } catch (err) {
      setResult("Error updating skill");
    }
  };

  return (
    <div className="edit-skill-wrap">
      <div className="edit-skill-grid">
        <form className="edit-skill-form" onSubmit={onSubmit}>
          <h2>Edit Skill</h2>
          <p className="edit-skill-subtitle">
            Update the skill details and save your changes.
          </p>

          <label htmlFor="title">Skill Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={skill.title}
            required
            minLength={3}
            maxLength={40}
          />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={skill.category}
            required
            minLength={2}
            maxLength={30}
          />

          <label htmlFor="level">Level</label>
          <select id="level" name="level" defaultValue={skill.level} required>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <label htmlFor="lessons">Lessons</label>
          <input
            type="number"
            id="lessons"
            name="lessons"
            defaultValue={skill.lessons}
            required
            min={1}
            max={20}
          />

          <label htmlFor="instructor">Instructor</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            defaultValue={skill.instructor}
            required
            minLength={2}
            maxLength={40}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={skill.description}
            required
            minLength={10}
            maxLength={200}
          />

          <label htmlFor="img">Update Image</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={uploadImage}
          />

          <button type="submit" className="btn btn-primary edit-skill-submit">
            Save Changes
          </button>

          <p className="edit-skill-result" aria-live="polite">
            {result}
          </p>
        </form>

        <div className="edit-skill-preview">
          <h3>Preview</h3>
          <img src={prevSrc} alt={skill.title} />
          <p>The preview updates when you choose a new image.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillEditDialog;