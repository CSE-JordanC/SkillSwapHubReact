import "../css/SearchBar.css";
import searchIcon from "../images/search.png";

const SearchBar = () => {
  return (
    <section className="search-filter">
      <div className="search-actions">
        <button className="search-btn" aria-label="Search">
          <span className="search-label">Search</span>
          <img src={searchIcon} alt="" className="search-icon" />
        </button>

        <button className="filter-btn" aria-label="Filter skills">
          Filter | Skills
        </button>
      </div>
    </section>
  );
};

export default SearchBar;