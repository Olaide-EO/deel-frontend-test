import { Option } from "./Autocomplete";

type AutocompleteItemProps = {
  options: Option[];
  isLoading: Boolean;
};
const AutoCompleteItems = ({ options, isLoading }: AutocompleteItemProps) => {
  return <div>
      {/* {isLoading && <div className="loading">Loading...</div>}
      {filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.name.replace(
                new RegExp(`(${inputValue})`, "gi"),
                "<strong>$1</strong>"
              )}
            </li>
          ))}
        </ul>
      )} */}
  </div>;
};

export default AutoCompleteItems;
