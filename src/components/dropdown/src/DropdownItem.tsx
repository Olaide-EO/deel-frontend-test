import { Option } from "../../autocomplete/src/Autocomplete";

interface DropdownItemProps {
  option: Option;
  onSelect: (option: Option) => void;
  keysToShow: string[];
  inputValue: string;
}

const DropdownItem = ({
  option,
  onSelect,
  keysToShow,
  inputValue,
}: DropdownItemProps) => {

  const formatItem = (data: Option) => {
    return keysToShow
      .reduce((acc, item) => {
        if (data[item as keyof typeof Option]) {
          acc.push(data[item as keyof typeof Option]);
        }
        return acc;
      }, [])
      .join(" -- ");
  };

  const highlightedText = (text: string, input: string) => {
    const checks = text.split(new RegExp(`(${input})`, "gi"));
    return (
      <span>
        {checks.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === input.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div
      className="dropdownitems cursor-pointer"
      onClick={() => onSelect(option)}
    >
      {highlightedText(formatItem(option), inputValue)}
    </div>
  );
};

export default DropdownItem;
