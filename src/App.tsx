import { Autocomplete } from "./components/autocomplete";
import autocompleteMockedData from "./data/autocomplete.mocked.json";
import "./assets/styles/app.css";

const App = () => {
  const handleSelect = () => {};

  return (
    <div className="app_container">
      <h1 className="heading mb-9">Deel Autocomplete Test</h1>


      <Autocomplete
        placeholder="Type to search..."
        icon="search"
        options={autocompleteMockedData}
        keysToSearch={["name", "surname"]}
        keysToShow={["name", "surname"]}
        apiUrl="https://deel.juanigallo.com/api/search?q="
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
