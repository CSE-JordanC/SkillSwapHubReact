import "../css/News.css";
import NewsCard from "../components/NewsCard";
import EventCard from "../components/EventCard";
import ContactForm from "../components/ContactForm";
import Video from "../components/Video";

import heroImage from "../images/communityspotlight.png";
import skillShareNight from "../images/skillsharenight.png";
import featureJamie from "../images/featurejamie.png";
import platformUpdate from "../images/platformupdate.png";

const News = () => {
  return (
    <main id="news" className="main-content news-page">
      <section className="news-hero">
        <div className="news-hero-left">
          <h1 className="news-title">SkillSwap Hub: Spring Community Spotlight</h1>
          <p className="news-sub">Read about our most active members and most-used skill workshops this month.</p>
          <a className="btn btn-primary hero-cta" href="#">
            Read Full Article
          </a>
        </div>

        <div className="news-hero-art">
          <img src={heroImage} alt="News hero artwork" />
        </div>
      </section>

      <section className="news-main content-area">
        <div className="news-grid">
          <section className="news-list">
            <div className="events-header">Latest News</div>

            <NewsCard
              image={skillShareNight}
              alt="SkillShare Night"
              title="New: Local SkillShare Night - Apr 22"
              subtitle="Read about SkillShare night and learn more about the workshops that might be there."
              expandable
              detail={
                <>
                  <p><strong>SkillShare Night — April 22</strong></p>
                  <p>Join us at the Community Hall from 6:00–9:00 PM for a hands-on evening of mini-workshops.</p>
                  <ul>
                    <li>Intro to Git & GitHub (beginners)</li>
                    <li>Upcycling small furniture</li>
                    <li>Portrait photography tips</li>
                    <li>Quick watercolor techniques</li>
                  </ul>
                  <p>Doors open at 5:45 — workshops start at 6:15. Tickets are free but limited.</p>
                </>
              }
            />

            <NewsCard
              image={featureJamie}
              alt="Feature: Jamie"
              title="Feature: How Jamie built a portfolio with SkillSwap Advanced"
              subtitle="Look into how one of our community members built their portfolio step by step."
            />

            <NewsCard
              image={platformUpdate}
              alt="Platform Update"
              title="Platform Update: Easier image uploads"
              subtitle="Read about all the patch notes on the latest update of SkillSwap Hub"
            />
          </section>

          <aside className="news-sidebar">
            <div className="events-header-side">Upcoming Events</div>
            <EventCard date="April 11" title="Free Coding Class" subtitle="Read about our most talked about night." />
            <EventCard date="April 22" title="SkillShare Night" subtitle="One of our biggest events of the year." />
          </aside>

          <section className="contact-list">
            <div className="events-header-bottom">Contact Us</div>
            <div className="event-card">
              <ContactForm />
            </div>
          </section>

          <aside className="howto-sidebar">
            <div className="events-header-bottom-side">Skill Swap Guide</div>
            <div className="event-card">
              <Video />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default News;