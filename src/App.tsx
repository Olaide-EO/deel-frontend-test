import { Autocomplete } from "./components/autocomplete";
import autocompleteMockedData from "./data/autocomplete.mocked.json";
import "./assets/styles/app.css";

const App = () => {
  const handleSelect = () => {};

  return (
    <div className="app-container">
      <h1 className="heading mb-9">Deel Autocomplete Test</h1>
      <Autocomplete
        placeholder="Type to search..."
        options={autocompleteMockedData}
        keysToSearch={["name", "email"]}
        keysToShow={["name", "email"]}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
