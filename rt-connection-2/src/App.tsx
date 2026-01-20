import "./App.css";
import BeforeImperModal from "./components/BeforeImperModal";
import BeforeModal from "./components/BeforeModal";
import NameInput from "./components/NameInput";
import RefInput from "./components/RefInput";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <div className="flex flex-row gap-8">
        <UserInput></UserInput>
        <NameInput></NameInput>
        <RefInput></RefInput>
        <BeforeModal></BeforeModal>
        <BeforeImperModal></BeforeImperModal>
      </div>
    </>
  );
}

export default App;
