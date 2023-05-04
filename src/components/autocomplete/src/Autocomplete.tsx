import { useState, useEffect } from "react";
import debounce from "../../../utils/commonfunctions/debounce";
import { TextInput } from "../../text-input";

type Option = {
  id: number;
  name: string;
  email: string;
};

type AutoCompleteProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder: string;
  icon: string;
  keysToSearch: string[];
  keysToShow: string[];
  apiUrl: string;
};

const AutoComplete = ({ options, onSelect }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOptions = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFilteredOptions(options);
      setIsLoading(false);
    };

    fetchOptions();
  }, [options]);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const value = event.target.value;
    setInputValue(value);
    setIsLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const filtered = options.filter((option: Option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsLoading(false);
  };

  const handleOptionClick = (option: Option) => {
    setInputValue(option.name);
    setFilteredOptions([]);
    onSelect(option);
  };

  return (
    <div className="autocomplete">
      <TextInput
        type="text"
        placeholder="Type to search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {isLoading && <div className="loading">Loading...</div>}
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
      )}
    </div>
  );
};

export default AutoComplete;
