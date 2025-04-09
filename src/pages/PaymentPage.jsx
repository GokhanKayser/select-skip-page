import { useState } from "react";
import "../styles/PaymentPage.css";

const PaymentPage = ({ onBack }) => {
  const [showCongrats, setShowCongrats] = useState(false);

  const handleFinish = () => {
    setTimeout(() => {
      setShowCongrats(true);
      setTimeout(() => {
        onBack();
      }, 5000);
    }, 100);
  };

  return (
    <section>
      <h1>Payment Page</h1>
      {!showCongrats && <button onClick={handleFinish}>Finish</button>}

      {showCongrats && (
        <div className="congratulations-message">
          <h2>Congratulations!</h2>
        </div>
      )}
    </section>
  );
};

export default PaymentPage;
