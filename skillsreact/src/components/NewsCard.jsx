import { useState } from "react";
import "../css/NewsCard.css";

const NewsCard = ({ image, alt, title, subtitle, detail, expandable = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className={`news-card ${open ? "expanded" : ""}`}>
      <img src={image} alt={alt} className="news-card-img" />
      <div className="news-card-body">
        {expandable ? (
          <h3 className="news-card-title">
            <button
              className="news-expand-btn"
              aria-expanded={open}
              aria-controls={`${title.replace(/\s+/g, "-").toLowerCase()}-detail`}
              onClick={() => setOpen((prev) => !prev)}
            >
              {title}
              <span className="expand-indicator" aria-hidden="true">
                ▾
              </span>
            </button>
          </h3>
        ) : (
          <h3 className="news-card-title">{title}</h3>
        )}

        <p className="news-card-sub">{subtitle}</p>

        {expandable && (
          <div
            className="news-detail"
            id={`${title.replace(/\s+/g, "-").toLowerCase()}-detail`}
            aria-hidden={!open}
          >
            {detail}
            <div className="news-detail-actions">
                <a href="#" className="btn btn-primary">
                    Register
                </a>

                <button className="btn btn-secondary" onClick={() => setOpen(false)}>
                    Close
                </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsCard;