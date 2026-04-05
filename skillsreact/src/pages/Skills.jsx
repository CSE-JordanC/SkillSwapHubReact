import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "../css/Skills.css";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import SkillCard from "../components/SkillCard";

import heroImage from "../images/shareskills.png";

const API_URL = "https://demo-backend-0ji8.onrender.com/api/skills";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadSkills = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(API_URL);
        setSkills(response.data);
      } catch (err) {
        setError("Could not load skills from the server.");
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const filteredSkills = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return skills;

    return skills.filter((skill) => {
      return (
        skill.title.toLowerCase().includes(search) ||
        skill.category.toLowerCase().includes(search) ||
        skill.instructor.toLowerCase().includes(search) ||
        skill.description.toLowerCase().includes(search)
      );
    });
  }, [skills, query]);

  return (
    <main id="skills" className="main-content skills-page">
      <Hero
        compact
        title="Post Your Own Community Skill"
        subtitle="Help the community by sharing your very own hand crafted skill."
        primaryText="Post Skill"
        primaryLink="/skills"
        image={heroImage}
        alt="Community skill artwork"
      />

      <div className="search-heading">
        <p>Find instructors and peer helpers by category, experience, or location.</p>
      </div>

      <SearchBar query={query} setQuery={setQuery} />

      <section className="cards-section">
        <div className="cards-grid">
          {loading && <p className="no-results">Loading skills...</p>}

          {error && <p className="no-results">{error}</p>}

          {!loading && !error && filteredSkills.length > 0 &&
            filteredSkills.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))
          }

          {!loading && !error && filteredSkills.length === 0 && (
            <p className="no-results">No skills match your search.</p>
          )}
        </div>
      </section>

      <Pagination />
    </main>
  );
};

export default Skills;