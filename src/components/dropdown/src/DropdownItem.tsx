import { Option } from "../../autocomplete/src/Autocomplete";

interface DropdownItemProps {
  option: Option;
  onSelect: (option: Option) => void;
  keysToShow: string[];
}

const DropdownItem = ({ option, onSelect, keysToShow }: DropdownItemProps) => {
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
  return (
    <div
      className="dropdownitems cursor-pointer"
      onClick={() => onSelect(option)}
    >
      {formatItem(option)}
    </div>
  );
};

export default DropdownItem;
