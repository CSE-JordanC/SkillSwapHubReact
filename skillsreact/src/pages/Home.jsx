import { useEffect, useState } from "react";
import axios from "axios";
import SkillCard from "../components/SkillCard";

const API_URL = "https://skillswaphubbackend.onrender.com/api/skills";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadSkills = async () => {
      const response = await axios.get(API_URL);
      setSkills(response.data.slice(0, 4)); // show first 4
    };

    loadSkills();
  }, []);

  return (
    <section className="featured">
      <h2 className="section-heading">Featured Skills</h2>

      <div className="cards-grid">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Home;