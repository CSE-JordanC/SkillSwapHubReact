import "../css/Pagination.css";

const Pagination = () => {
  return (
    <nav className="pagination" aria-label="Skills pagination">
      <button className="page-btn">&lt;</button>
      <button className="page-btn">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>
      <button className="page-btn">4</button>
      <button className="page-btn">5</button>
      <button className="page-btn">6</button>
      <button className="page-btn">&gt;</button>
    </nav>
  );
};

export default Pagination;