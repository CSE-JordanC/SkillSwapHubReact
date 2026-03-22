import { Link } from "react-router-dom";
import "../css/Header.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header id="main-header">
      <Link to="/" className="brand-link" aria-label="Return to SkillSwap Hub home">
        <div className="brand">
          <div className="brand-title">SkillSwap Hub</div>
          <div className="brand-sub">Learn, Share, Grow</div>
        </div>
      </Link>

      <Navigation />

      <div className="auth">
        <button className="btn btn-accent">Login/Sign Up</button>
      </div>
    </header>
  );
};

export default Header;