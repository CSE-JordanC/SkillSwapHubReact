import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "../css/ViewSkill.css";
import SidebarActions from "../components/SidebarActions";
import ReviewCard from "../components/ReviewCard";
import SimilarSkillCard from "../components/SimilarSkillCard";

const API_URL = "https://skillswaphubbackend.onrender.com/api/skills";

const ViewSkill = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [similarSkills, setSimilarSkills] = useState([]); // ✅ added
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadSkill = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`${API_URL}/${id}`);
        setSkill(response.data);
      } catch (err) {
        setError("Could not load skill details.");
      } finally {
        setLoading(false);
      }
    };

    loadSkill();
  }, [id]);

  // ✅ NEW: Load similar skills
  useEffect(() => {
    const loadSimilar = async () => {
      try {
        const response = await axios.get(API_URL);

        const filtered = response.data
          .filter((s) => s._id !== skill._id) // exclude current skill
          .slice(0, 2); // limit to 2

        setSimilarSkills(filtered);
      } catch (err) {
        console.error("Error loading similar skills:", err);
      }
    };

    if (skill) {
      loadSimilar();
    }
  }, [skill]);

  if (loading) {
    return (
      <main id="viewskills" className="main-content viewskills-page">
        <section className="content-area">
          <p className="viewskills-loading">Loading skill details...</p>
        </section>
      </main>
    );
  }

  if (error || !skill) {
    return (
      <main id="viewskills" className="main-content viewskills-page">
        <section className="content-area">
          <p className="viewskills-loading">{error || "Skill not found."}</p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/skills" className="btn btn-secondary">
              Back to Skills
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="viewskills" className="main-content viewskills-page">
      <section className="content-area">
        <div className="layout">
          <section className="main-column">
            <div className="skill-hero">
              <img
                src={`https://skillswaphubbackend.onrender.com/images/${skill.img_name}`}
                alt={skill.title}
              />

              <div className="skill-info">
                <h1>{skill.title}</h1>
                <div className="badge">
                  {skill.category} · {skill.level}
                </div>

                <p>{skill.description}</p>

                <div className="tags">
                  <span>#{skill.level.toLowerCase()}</span>
                  <span>#in-person</span>
                  <span>#one-on-one</span>
                  <span>#{skill.category.toLowerCase()}</span>
                </div>

                <div className="instructor">
                  <div>
                    <strong>{skill.instructor}</strong>
                    <div>{skill.lessons} lessons</div>
                  </div>
                </div>
              </div>
            </div>

            <section className="reviews">
              <h2>Reviews</h2>

              <ReviewCard
                name="Sarah L."
                rating="★★★★★"
                text={'"Awesome lessons! Alex made learning guitar easy and enjoyable."'}
              />

              <ReviewCard
                name="David P."
                rating="★★★★★"
                text={'"Fantastic instructor. Patient and encouraging!"'}
              />
            </section>

            <section className="similar">
              <h2>Similar Skills</h2>

              <div className="similar-grid">
                {similarSkills.map((s) => (
                  <SimilarSkillCard
                    key={s._id}
                    image={`https://skillswaphubbackend.onrender.com/images/${s.img_name}`}
                    title={s.title}
                    id={s._id}
                  />
                ))}
              </div>
            </section>
          </section>

          <SidebarActions />
        </div>
      </section>
    </main>
  );
};

export default ViewSkill;