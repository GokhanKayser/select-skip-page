import { useState, useEffect } from "react";
import { fetchSkips } from "../data/api";
import SkipCard from "./SkipCard";
import Drawer from "./Drawer";
import "../styles/SkipList.css";

const SkipList = ({ onNext, onBack }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  useEffect(() => {
    fetchSkips().then((data) => {
      const formatted = data.map((skip) => ({
        id: skip.id,
        size: skip.size,
        days: skip.hire_period_days,
        price: skip.price_before_vat,
        priceWithVat: Math.round(skip.price_before_vat * (1 + skip.vat / 100)),
        allowed_on_road: skip.allowed_on_road,
        allows_heavy_waste: skip.allows_heavy_waste,
      }));
      setSkips(formatted);
      setLoading(false);
    });
  }, []);

  const handleSelect = (skip) => {
    setSelectedSkip(skip);
    setSelectedSkipId(skip.id);
    setDrawerOpen(true);
  };

  const handleNext = () => {
    setDrawerOpen(false);
    onNext();
  };

  const handleClose = () => {
    setDrawerOpen(false);
    setSelectedSkip(null);
    setSelectedSkipId(null);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="skip-grid">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            {...skip}
            onSelect={() => handleSelect(skip)}
            isSelected={skip.id === selectedSkipId}
          />
        ))}
      </div>
      <Drawer
        isOpen={drawerOpen}
        onClose={handleClose}
        onNext={handleNext}
        selectedSkip={selectedSkip}
        onBack={onBack}
      />
    </>
  );
};

export default SkipList;
