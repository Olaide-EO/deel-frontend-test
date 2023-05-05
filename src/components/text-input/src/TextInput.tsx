import React, { memo } from "react";
import { Icon } from "../../icon";
import "./styles.css";

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  icon?: string;
  onFocus?: () => void;
};

const TextInput = memo(
  ({ value, onChange, type, placeholder, icon, onFocus }: TextInputProps) => {
    return (
      <div className="textinput-container">
        <input
          className="text-input"
          type={type || "text"}
          placeholder={placeholder || "Type to search..."}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
        {icon && <Icon src={icon} />}
      </div>
    );
  }
);

export default TextInput;
