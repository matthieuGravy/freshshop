import React, { Fragment } from "react";
import NavLinkComponent from "./NavLinkComponent";

interface Link {
  id: number;
  to: string;
  text: string;
}

const links: Link[] = [
  { id: 0, to: "/", text: "home" },
  { id: 1, to: "shop", text: "shop" },
  { id: 2, to: "about", text: "about us" },
];

const Maplinks: React.FC = () => {
  return (
    <>
      {links.map((link) => (
        <Fragment key={link.id}>
          <NavLinkComponent to={link.to} text={link.text} />
        </Fragment>
      ))}
    </>
  );
};

export default Maplinks;
