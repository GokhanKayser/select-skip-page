import { useState } from "react";
import Stepper from "./components/Stepper";
import MobileStepper from "./components/MobileStepper";
import steps from "./config/steps.jsx";
import { getPageComponent } from "./utils/renderPage.jsx";
import "./index.css";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (clickedStep) => {
    if (clickedStep < currentStep) {
      setCurrentStep(clickedStep);
    }
  };

  return (
    <main>
      <MobileStepper steps={steps} currentStep={currentStep} />
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
      <div className="wrapper">
        {getPageComponent(currentStep, setCurrentStep)}
      </div>
    </main>
  );
}

export default App;
