import SkipList from "../components/SkipList"

const SelectSkipPage = ({onNext, onBack}) => {
  return (
    <section>
     <h1>Choose Your Skip Size</h1>
      <p>Select the skip size that best suits your needs</p>
      <SkipList onNext={onNext} onBack={onBack} />
    </section>
  );
};

export default SelectSkipPage;
