import { useState } from "react";
import "../css/AddSkillDialog.css";

const API_URL = "https://skillswaphubbackend.onrender.com/api/skills";
const IMAGE_BASE = "https://skillswaphubbackend.onrender.com/images/";

const imageOptions = [
  "guitarbasics.png",
  "introtoweb.png",
  "personalfitness.png",
  "digitalphotography.png",
  "spanishbasics.png",
  "introtopainting.png",
  "songwriting_essentials.png",
  "portrait_lighting.png",
  "intro_to_illustrator.png",
];

const AddSkillDialog = ({ closeAddDialog, onAdded }) => {
  const [status, setStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState("guitarbasics.png");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("Sending...");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.lessons = Number(payload.lessons);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        const createdSkill = data.skill || data.item || data;
        setStatus("Skill added successfully.");
        onAdded(createdSkill);
        form.reset();
        setSelectedImage("guitarbasics.png");
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

            <label htmlFor="img_name">Skill Image</label>
            <select
              id="img_name"
              name="img_name"
              value={selectedImage}
              onChange={(e) => setSelectedImage(e.target.value)}
              required
            >
              {imageOptions.map((img) => (
                <option key={img} value={img}>
                  {img}
                </option>
              ))}
            </select>

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

            <button type="submit" className="btn btn-primary add-skill-submit">
              Submit Skill
            </button>

            <p className="add-skill-status" aria-live="polite">
              {status}
            </p>
          </form>

          <div className="add-skill-preview">
            <h3>Preview</h3>
            <img
              src={`${IMAGE_BASE}${selectedImage}`}
              alt="Selected skill preview"
            />
            <p>The image preview stays small so it fits the design cleanly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkillDialog;