import "../css/Home.css";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

import heroImage from "../images/shareskills.png";
import createAccount from "../images/createaccount.png";
import postBrowse from "../images/postorbrowseskills.png";
import learnConnect from "../images/learnandconnect.png";

const Home = () => {
  return (
    <main id="home" className="main-content">
      <Hero
        title={
          <>
            Share Your Skills.
            <br />
            Learn Something New.
          </>
        }
        subtitle="Connect with people in your community to teach, learn, and grow together."
        primaryText="Post a Skill"
        primaryLink="/skills"
        secondaryText="Browse Skills"
        secondaryLink="/skills"
        image={heroImage}
        alt="Hero artwork"
      />

      <section className="how">
        <h2 className="section-title">How SkillSwap Hub Works</h2>

        <div className="feature-cards">
          <FeatureCard
            image={createAccount}
            title="Create an Account"
            text="Sign up to join the SkillSwap Hub community and start sharing skills."
          />
          <FeatureCard
            image={postBrowse}
            title="Post or Browse Skills"
            text="Add skills you offer or explore skills posted by others."
          />
          <FeatureCard
            image={learnConnect}
            title="Learn and Connect"
            text="Discover new opportunities and connect through shared knowledge."
          />
        </div>
      </section>

      <section className="featured">
        <h2 className="section-heading">Featured Skills</h2>

        <div className="cards-grid">
          {skills.slice(0, 4).map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;