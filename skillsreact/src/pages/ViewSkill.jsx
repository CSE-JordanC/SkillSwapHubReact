import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "../css/ViewSkill.css";
import SidebarActions from "../components/SidebarActions";
import ReviewCard from "../components/ReviewCard";
import SimilarSkillCard from "../components/SimilarSkillCard";

import webImage from "../images/introtoweb.png";
import paintImage from "../images/introtopainting.png";

const API_URL = "https://demo-backend-0ji8.onrender.com/api/skills";

const ViewSkill = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
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
                src={`https://demo-backend-0ji8.onrender.com/images/${skill.img_name}`}
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
                <SimilarSkillCard image={webImage} title="Intro to Web Design" id={2} />
                <SimilarSkillCard image={paintImage} title="Intro to Painting" id={6} />
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