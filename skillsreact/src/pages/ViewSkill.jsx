import "../css/ViewSkill.css";
import SidebarActions from "../components/SidebarActions";
import ReviewCard from "../components/ReviewCard";
import SimilarSkillCard from "../components/SimilarSkillCard";

import heroImage from "../images/guitarbasics.png";
import webImage from "../images/introtoweb.png";
import paintImage from "../images/introtopainting.png";

const ViewSkill = () => {
  return (
    <main id="viewskills" className="main-content viewskills-page">
      <section className="content-area">
      <div className="layout">
        <section className="main-column">
          <div className="skill-hero">
            <img src={heroImage} alt="Guitar lesson" />

            <div className="skill-info">
              <h1>Guitar Basics</h1>
              <div className="badge">Music · Beginner</div>

              <p>
                Learn 6 open chords, basic strumming patterns, and 3 easy songs. Lessons are 45 minutes and perfect for
                beginners. Includes handouts, chord charts, and a guided practice plan.
              </p>

              <div className="tags">
                <span>#beginner</span>
                <span>#in-person</span>
                <span>#one-on-one</span>
                <span>#acoustic</span>
              </div>

              <div className="instructor">
                <div>
                  <strong>Alex M.</strong>
                  <div>4.9 ★ (24 reviews)</div>
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
              <SimilarSkillCard image={webImage} title="Intro to Web Design" />
              <SimilarSkillCard image={paintImage} title="Intro to Painting" />
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