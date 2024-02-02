import React from "react";
import { NavLink, useMatch } from "react-router-dom";

interface NavLinkProps {
  to: string;
  text: string;
}

const NavLinkComponent: React.FC<NavLinkProps> = ({ to, text }) => {
  const match = useMatch(to);
  const handleClick = () => {
    if (window.innerWidth <= 1023) {
      toggleNav(); // Assurez-vous que toggleNav est défini et importé
    }
  };

  return (
    <li className="px-3 grid place-items-center">
      <NavLink
        onClick={handleClick}
        to={to}
        className={`px-2 hover:transition-all hover:text-orange-300 ${
          match ? "text-orange-300" : ""
        } transition-all duration-300 ease-in-out text-transform: uppercase`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavLinkComponent;
