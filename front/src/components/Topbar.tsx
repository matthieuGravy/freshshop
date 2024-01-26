import { NavLink, useMatch } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useSelector } from "react-redux";

import { RootState } from "../store/";
import logo from "../assets/images/logo.png";
import Logout from "./Logout";
import CroixIcon from "./Icons/CroixIcon";
import HamburgerIcon from "./Icons/HamburgerIcon";
import AccountIcon from "./Icons/AccountIcon";
import WishIcon from "./Icons/WishIcon";
import CastIcon from "./Icons/CastIcon";
import SearchIcon from "./Icons/SearchIcon";

interface Link {
  id: number;
  to: string;
  text: string;
}

interface NavLinkProps {
  to: string;
  text: string;
}

function Topbar() {
  const user = useSelector((state: RootState) => state.user);

  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    if (scrollYProgress > 0.1) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [scrollYProgress]);

  const links: Link[] = [
    { id: 0, to: "/", text: "home" },
    { id: 1, to: "about", text: "about us" },
    { id: 2, to: "shop", text: "shop" },
    { id: 3, to: "gallery", text: "gallery" },
    { id: 4, to: "contact", text: "contact us" },
  ];

  const NavLinkComponent = ({ to, text }: NavLinkProps) => {
    const match = useMatch(to);
    const handleClick = () => {
      if (window.innerWidth <= 1023) {
        toggleNav();
      }
    };
    return (
      <li className="px-3 grid place-items-center">
        <NavLink
          onClick={handleClick}
          to={to}
          className={`px-2 hover:transition-all hover:text-green-500 ${
            match ? "text-green-500" : ""
          } transition-all duration-300 ease-in-out text-transform: uppercase`}
        >
          {text}
        </NavLink>
      </li>
    );
  };

  function Maplinks() {
    return links.map((link) => (
      <Fragment key={link.id}>
        <NavLinkComponent to={link.to} text={link.text} />
      </Fragment>
    ));
  }

  return (
    <motion.header
      variants={{ isVisible: { y: 0 }, isHidden: { y: -30 } }}
      initial={{ y: -30 }}
      animate={
        ({ y: 0, isHidden: { y: -30 } }, isHidden ? "isHidden" : "isVisible")
      }
      transition={{ duration: 0.3 }}
      className="fixed top-0 flex flex-col w-full  z-40"
    >
      <section className="flex bg-green-50 py-1">
        <button
          onClick={toggleNav}
          className="lg:hidden xl:hidden flex-initial w-10  grid place-items-center "
        >
          {/* hamburger */}
          <HamburgerIcon />
        </button>
        <button className="mx-2 ">
          {/* search */}
          <SearchIcon />
        </button>

        {user ? (
          <ul className="flex-1 flex justify-end pe-3">
            {/* My acount*/}
            <li className="px-2">
              <NavLink to="/my-account">
                {/* account */}
                <AccountIcon />
              </NavLink>
            </li>
            {/* <whishlist*/}
            <li className="px-2">
              <WishIcon />
            </li>
            {/* Cast */}
            <li className="px-2">
              <CastIcon />
            </li>
            <li className="px-2">
              <Logout />
            </li>
          </ul>
        ) : (
          <ul className="flex-1 flex justify-end pe-3">
            <li className="px-2">
              <NavLink to="/login">
                {/* account */}
                <AccountIcon />
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        )}
      </section>
      <section className="flex flex-row justify-between flex justify-around lg:bg-green-50">
        <section
          className={`z-50 lg:z-0 flex-3 lg:flex h-full w-full lg:h-auto backdrop-blur lg:backdrop-blur-none left-0 top:-10 lg:grid lg:place-items-center ${
            isNavVisible ? "sticky" : "hidden"
          }`}
        >
          <ul className="transition-all duration-300 lg:min-w-full lg:flex-1 flex justify-center text-center min-h-[110vh] flex-col lg:flex-row gap-y-5 lg:min-h-0 lg:h-14 bg-green-50 w-full md:w-1/2  lg:bg-transparent relative ">
            <button
              onClick={toggleNav}
              className="lg:hidden xl:hidden absolute right-5 top-5 "
            >
              {/* croix */}
              <CroixIcon />
            </button>
            <figure className="pb-12 lg:pb-0 flex justify-center lg:px-3">
              <NavLink>
                <img src={logo} alt="FreshShop logo" className="h-10" />
              </NavLink>
            </figure>
            <Maplinks />
          </ul>
        </section>
      </section>
    </motion.header>
  );
}

export default Topbar;
