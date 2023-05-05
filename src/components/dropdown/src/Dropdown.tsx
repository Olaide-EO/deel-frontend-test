import { useState } from "react"
import { Option } from "../../autocomplete/src/Autocomplete"
import "./styles.css"

interface DropdownProps {
    loading: boolean;
     options: Option[],
     isOpen: boolean;
}

const Dropdown = ({loading, options, isOpen} : DropdownProps) => {
    if(!isOpen) return null
   return <div className="dropdown-container "></div>
}

export default Dropdown;