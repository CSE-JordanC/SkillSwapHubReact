import { Link } from "react-router-dom";
import "../css/Hero.css";

const Hero = ({
  title,
  subtitle,
  primaryText,
  primaryLink,
  primaryOnClick,
  secondaryText,
  secondaryLink,
  image,
  alt,
  compact = false,
}) => {
  const renderPrimaryAction = () => {
    if (!primaryText) return null;

    if (primaryOnClick) {
      return (
        <button type="button" className="btn btn-primary" onClick={primaryOnClick}>
          {primaryText}
        </button>
      );
    }

    if (primaryLink) {
      return (
        <Link className="btn btn-primary" to={primaryLink}>
          {primaryText}
        </Link>
      );
    }

    return null;
  };

  const renderSecondaryAction = () => {
    if (!secondaryText || !secondaryLink) return null;

    return (
      <Link className="btn btn-secondary" to={secondaryLink}>
        {secondaryText}
      </Link>
    );
  };

  if (compact) {
    return (
      <section className="hero-compact">
        <div className="hero-copy">
          <h1 className="hero-compact-title">{title}</h1>
          <p className="hero-compact-sub">{subtitle}</p>
          <div className="hero-compact-actions">
            {renderSecondaryAction()}
            {renderPrimaryAction()}
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
          {renderSecondaryAction()}
          {renderPrimaryAction()}
        </div>
      </div>

      <div className="hero-art">
        <img src={image} alt={alt} />
      </div>
    </section>
  );
};

export default Hero;