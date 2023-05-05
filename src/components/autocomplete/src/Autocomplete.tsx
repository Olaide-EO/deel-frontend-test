import { useState, useEffect, memo } from "react";
import { debounce } from "../../../utils/commonfunctions";
import { TextInput } from "../../text-input";
import "./styles.css";
import { Dropdown } from "../../dropdown";
import useOutsideClick from "../../../utils/hooks/useOutsideClick";
import { toLowerCase } from "../../../utils/commonfunctions";

export type Option = {
  id: number;
  name: string;
  email: string;
};

type AutoCompleteProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
  keysToSearch: string[];
  keysToShow: string[];
  debounceTime?: number;
};

const AutoComplete = memo(
  ({
    options,
    onSelect,
    placeholder,
    keysToSearch,
    keysToShow,
    debounceTime = 500
  }: AutoCompleteProps) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const ref = useOutsideClick(() => setOpen(false));

    const handleOptionClick = (option: Option) => {
      setInputValue(`${option.name} ${option.email}`);
      onSelect(option);
      setOpen(false);
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

    const fetchSearchResults = debounce(async (value: string) => {
      try {
        const searchValue = toLowerCase(value);
        const filtered = options.filter((option: Option) => {
          const joinedSearch = keysToSearch
            .map((key) => {
              return toLowerCase(option[key as keyof typeof Option]);
            })
            .join(" ");

          return joinedSearch.includes(searchValue);
        });

        setFilteredOptions(filtered);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, debounceTime);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      setIsLoading(true);
      fetchSearchResults(value);
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
        <Dropdown
          loading={isLoading}
          options={filteredOptions}
          isOpen={isOpen}
          onSelect={handleOptionClick}
          keysToShow={keysToShow}
          inputValue={inputValue}
        />
      </div>
    );
  }
);

export default AutoComplete;
