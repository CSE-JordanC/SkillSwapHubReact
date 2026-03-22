import "../css/Skills.css";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

import heroImage from "../images/shareskills.png";

const Skills = () => {
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

      <SearchBar />

      <section className="cards-section">
        <div className="cards-grid">
          {skills.map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
        </div>
      </section>

      <Pagination />
    </main>
  );
};

export default Skills;