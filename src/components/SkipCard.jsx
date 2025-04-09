import "../styles/SkipCard.css";
import yardImg from "../assets/yard-img.jpg";
import { FiAlertTriangle } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const SkipCard = ({
  size,
  price,
  days,
  allowed_on_road,
  allows_heavy_waste,
  priceWithVat,
  onSelect,
  isSelected,
}) => {
  const renderNotices = () => {
    const notices = [];

    if (!allowed_on_road) {
      notices.push(
        <p className="notice notice-road" key="on-road">
          <FiAlertTriangle className="alert-triangle" />
          Private Property Only
        </p>
      );
    }

    if (!allows_heavy_waste) {
      notices.push(
        <p className="notice notice-heavy" key="heavy-waste">
          <FiAlertTriangle className="alert-triangle" />
          Not Suitable for Heavy Waste
        </p>
      );
    }

    return notices.length > 0 ? <div className="notices">{notices}</div> : null;
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        size,
        price,
        days,
        allowed_on_road,
        allows_heavy_waste,
        priceWithVat,
      });
    }
  };

  const buttonClass = `select-btn ${
    (allows_heavy_waste ? "allowed" : "not-allowed",
    isSelected ? "selected" : "")
  }`;

  return (
    <div className="skip-card">
      <div className="image-wrapper">
        <img src={yardImg} alt={`${size} Yard Skip`} className="skip-image" />
        <div className="skip-badge">{size} Yards</div>
        {renderNotices()}
      </div>

      <div className="skip-info">
        <h3>{size} Yard Skip</h3>
        <p>{days} day hire period</p>
        <div className="price-group">
          <p className="price price-ex-vat">
            £{price} <span className="light-ex-text">per week (excl. VAT)</span>
          </p>
          <p className="price price-inc-vat">
            £{priceWithVat}{" "}
            <span className="light-text">per week (incl. VAT)</span>
          </p>
        </div>
        <button
          className={buttonClass}
          onClick={handleSelect}
          disabled={!allows_heavy_waste}
        >
          {isSelected ? "Selected" : "Select This Skip"}{" "}
          {!isSelected ? <TiArrowRight className="rightArrowIcon" /> : ""}
        </button>
      </div>

      {!allows_heavy_waste && <div className="allows-background"></div>}
    </div>
  );
};

export default SkipCard;
