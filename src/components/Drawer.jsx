import { useEffect, useRef } from "react";
import "../styles/Drawer.css";

const Drawer = ({ isOpen, onClose, onNext, selectedSkip, onBack }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!selectedSkip)
    return <div className={`drawer-wrapper ${isOpen ? "open" : ""}`}></div>;

  return (
    <div className={`drawer-wrapper ${isOpen ? "open" : ""}`}>
      <div className="drawer" ref={drawerRef}>
        <div className="drawer-left">
          <h4>{selectedSkip.size} Yard Skip</h4>
          <p className="price">£{selectedSkip.price} per week</p>
        </div>
        <div className="drawer-right">
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
          <button className="next-btn" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
