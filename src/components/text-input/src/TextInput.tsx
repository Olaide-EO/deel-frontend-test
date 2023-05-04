import React from "react";

type TextInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

const TextInput = ({ value, onChange, type, placeholder}: TextInputProps) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Type to search..."}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;