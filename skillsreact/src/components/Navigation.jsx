import { NavLink } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <nav id="main-nav" aria-label="Main navigation">
      <ul className="columns">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={({ isActive }) => (isActive ? "active" : "")}>
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;