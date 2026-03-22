import { Link, useLocation } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <footer id="main-footer">
        {isHome && (
          <div className="footer-cta">
            <h3>Ready to Share Your Skills?</h3>
            <p>Join SkillSwap Hub today and start learning from your community.</p>
            <Link className="btn btn-accent-large" to="/skills">
              Get Started
            </Link>
          </div>
        )}
      </footer>

      <footer id="bottom-footer">
        <p>
          © {year} SkillSwap Hub · <a href="#">Terms</a> · <a href="#">Privacy</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;