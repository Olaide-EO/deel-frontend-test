import { Option } from "../../autocomplete/src/Autocomplete";
import "./styles.css";
import loadingIcon from "../../../assets/icons/loading.svg";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
  loading: boolean;
  options: Option[];
  isOpen: boolean;
  keysToShow: string[];
  onSelect: (option: Option) => void;
}

const Dropdown = ({ loading, options, isOpen, onSelect, keysToShow }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-container animated fadeInUp">
      {loading && <img alt="" src={loadingIcon} className="loading" />}
      {options.map((option) => (
        <DropdownItem
          key={Math.random() * options.length * 1000}
          {...{ option, onSelect, keysToShow }}
        />
      ))}
      {options.length === 0 && (
        <div className="dropdown-empty-state">No record found</div>
      )}
    </div>
  );
};

export default Dropdown;
