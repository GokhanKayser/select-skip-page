import PostcodePage from "../pages/PostcodePage";
import WasteTypePage from "../pages/WasteTypePage";
import SelectSkipPage from "../pages/SelectSkipPage";
import PermitCheckPage from "../pages/PermitCheckPage";
import ChooseDatePage from "../pages/ChooseDatePage";
import PaymentPage from "../pages/PaymentPage";

export const getPageComponent = (step, setStep) => {
  switch (step) {
    case 0:
      return <PostcodePage onNext={() => setStep(1)} />;
    case 1:
      return <WasteTypePage onNext={() => setStep(2)} onBack={() => setStep(0)} />;
    case 2:
      return <SelectSkipPage onNext={() => setStep(3)} onBack={() => setStep(1)} />;
    case 3:
      return <PermitCheckPage onNext={() => setStep(4)} onBack={() => setStep(2)} />;
    case 4:
      return <ChooseDatePage onNext={() => setStep(5)} onBack={() => setStep(3)} />;
    case 5:
      return <PaymentPage onBack={() => setStep(0)} />;
    default:
      return null;
  }
};