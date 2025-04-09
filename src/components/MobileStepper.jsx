import "../styles/MobileStepper.css";

const MobileStepper = ({ steps, currentStep }) => {
  const step = steps[currentStep];
  const nextStep = steps[currentStep + 1];

  return (
    <div className="mobile-stepper">
      <div className="mobile-icon-circle">
        <div className="icon">{step.icon}</div>
        <div className="step-counter">{currentStep + 1}/{steps.length}</div>
      </div>

      <div className="mobile-step-texts">
        <div className="current-step-name">{step.name}</div>
        {nextStep && (
          <div className="next-step-name">Next: {nextStep.name}</div>
        )}
      </div>
    </div>
  );
};

export default MobileStepper;
