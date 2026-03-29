import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../css/Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="main-nav" aria-label="Main navigation">
      <button
        id="toggle-nav"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-nav-links"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <ul id="main-nav-links" className={menuOpen ? "columns show" : "columns"}>
        <li>
            <NavLink 
            to="/" 
            end 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            Home
            </NavLink>
        </li>

        <li>
            <NavLink 
            to="/skills" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            Skills
            </NavLink>
        </li>

        <li>
            <NavLink 
            to="/news" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            News
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;