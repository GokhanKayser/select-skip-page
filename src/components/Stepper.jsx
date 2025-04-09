import "../styles/Stepper.css";

const Stepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isClickable = isCompleted;

        const CompletedComponent = () => {
          return (
            <div
              className={`step-circle ${
                isCompleted ? "completed" : isActive ? "active" : ""
              }`}
            >
              {step.icon}
              <div
                className={`step-label ${
                  isCompleted ? "completed" : isActive ? "active" : ""
                }`}
              >
                {step.name}
              </div>
            </div>
          );
        };

        const CompletedLine = () =>
          index !== steps.length - 1 ? (
            <div
              className={`step-line ${isCompleted ? "completed-line" : ""}`}
            />
          ) : null;

        return (
          <div
            className="step-item"
            key={index}
            onClick={() => isClickable && onStepClick?.(index)}
            style={{
              cursor: isActive
                ? "wait"
                : isCompleted
                ? "pointer"
                : "not-allowed",
            }}
          >
            <div className="step-top">
              <CompletedComponent />
              <CompletedLine />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;