import { useState, useEffect, useCallback } from "react";
import debounce from "../../../utils/commonfunctions/debounce";
import { TextInput } from "../../text-input";
import "./styles.css";
import { Dropdown } from "../../dropdown";
import useOutsideClick from "../../../utils/hooks/useOutsideClick";

export type Option = {
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

const AutoComplete = ({
  options,
  onSelect,
  placeholder,
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const ref = useOutsideClick(() => setOpen(false));

  const handleOptionClick = (option: Option) => {
    setInputValue(option.name);
    setFilteredOptions([]);
    onSelect(option);
  };

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

  return (
    <div ref={ref} className="autocomplete-container">
      <TextInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        icon="search"
        onFocus={() => setOpen(true)}
      />
      <Dropdown loading={isLoading} options={filteredOptions} isOpen={isOpen} />
    </div>
  );
};

export default AutoComplete;
