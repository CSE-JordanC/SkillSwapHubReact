import { useState } from "react";
import "../css/AddSkillDialog.css";

const API_URL = "https://skillswaphubbackend.onrender.com/api/skills";

const AddSkillDialog = ({ closeAddDialog, onAdded }) => {
  const [status, setStatus] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrevSrc(URL.createObjectURL(file));
    } else {
      setPrevSrc("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    setStatus("Sending...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Skill added successfully.");
        onAdded(data);
        form.reset();
        setPrevSrc("");
      } else {
        setStatus(data.error || "Error adding skill.");
      }
    } catch (error) {
      setStatus("Error adding skill.");
    }
  };

  return (
    <div className="add-skill-backdrop" onClick={closeAddDialog}>
      <div className="add-skill-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="add-skill-close"
          onClick={closeAddDialog}
          aria-label="Close"
        >
          ×
        </button>

        <div className="add-skill-grid">
          <form className="add-skill-form" onSubmit={onSubmit}>
            <h2>Post a New Skill</h2>
            <p className="add-skill-subtitle">
              Share something you can teach with the community.
            </p>

            <label htmlFor="title">Skill Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              minLength={3}
              maxLength={40}
            />

            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              required
              minLength={2}
              maxLength={30}
            />

            <label htmlFor="level">Level</label>
            <select id="level" name="level" required defaultValue="">
              <option value="" disabled>
                Select a level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <label htmlFor="lessons">Lessons</label>
            <input
              type="number"
              id="lessons"
              name="lessons"
              required
              min={1}
              max={20}
            />

            <label htmlFor="instructor">Instructor</label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              required
              minLength={2}
              maxLength={40}
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              minLength={10}
              maxLength={200}
            />

            <label htmlFor="img">Select Image</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={uploadImage}
              required
            />

            <p id="img-prev-section">
              {prevSrc ? <img id="img-prev" src={prevSrc} alt="Preview" /> : null}
            </p>

            <button type="submit" className="btn btn-primary add-skill-submit">
              Submit Skill
            </button>

            <p className="add-skill-status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSkillDialog;