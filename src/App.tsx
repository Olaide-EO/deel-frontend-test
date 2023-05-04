import "./assets/styles/app.css";
import { Autocomplete } from "./components/autocomplete";
import autocompleteMockedData from "./data/autocomplete.mocked.json";

function App() {

  const handleSelect = () => {};

  return (
    <div className="App">
      <Autocomplete
          placeholder="Start typing to search"
          icon="search"
          options={autocompleteMockedData}
          keysToSearch={["name", "surname"]}
          keysToShow={["name", "surname"]}
          apiUrl="https://deel.juanigallo.com/api/search?q="
          onSelect={handleSelect}
        />
    </div>
  );
}

export default App;
