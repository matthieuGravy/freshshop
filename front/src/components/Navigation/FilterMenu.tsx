import React, { useState } from "react";
import DropdownIcon from "../Icons/DropdownIcon";
import DropupIcon from "../Icons/DropupIcon";

interface FilterMenuProps {
  children: React.ReactNode;
  buttonTitle: string;
  styleButton: string;
}
const FilterMenu = ({ children, buttonTitle, styleButton }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <>
      <button className={styleButton} onClick={handleFilterMenu}>
        {buttonTitle}

        {isFilterMenuOpen ? <DropupIcon /> : <DropdownIcon />}
      </button>
      {isFilterMenuOpen && <>{children}</>}
    </>
  );
};

export default FilterMenu;
