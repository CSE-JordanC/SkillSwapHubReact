import "../css/SearchBar.css";
import searchIcon from "../images/search.png";

const SearchBar = ({ query, setQuery }) => {
  return (
    <section className="search-filter">
      <div className="search-actions">
        <div className="search-btn" aria-label="Search skills">
          <span className="search-label">Search</span>
          <img src={searchIcon} alt="" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by title, category, or instructor"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="filter-btn"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default SearchBar;