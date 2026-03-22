import { Link } from "react-router-dom";
import "../css/Hero.css";

const Hero = ({
  title,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  image,
  alt,
  compact = false,
}) => {
  if (compact) {
    return (
      <section className="hero-compact">
        <div className="hero-copy">
          <h1 className="hero-compact-title">{title}</h1>
          <p className="hero-compact-sub">{subtitle}</p>
          <div className="hero-compact-actions">
            {secondaryText && secondaryLink && (
              <Link className="btn btn-secondary" to={secondaryLink}>
                {secondaryText}
              </Link>
            )}
            {primaryText && primaryLink && (
              <Link className="btn btn-primary" to={primaryLink}>
                {primaryText}
              </Link>
            )}
          </div>
        </div>

        <div className="hero-compact-art">
          <img src={image} alt={alt} />
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-sub">{subtitle}</p>
        <div className="hero-cta">
          {secondaryText && secondaryLink && (
            <Link to={secondaryLink} className="btn btn-secondary">
              {secondaryText}
            </Link>
          )}
          {primaryText && primaryLink && (
            <Link to={primaryLink} className="btn btn-primary">
              {primaryText}
            </Link>
          )}
        </div>
      </div>

      <div className="hero-art">
        <img src={image} alt={alt} />
      </div>
    </section>
  );
};

export default Hero;