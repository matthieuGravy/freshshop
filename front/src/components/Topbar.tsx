import { NavLink, useMatch } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useSelector } from "react-redux";

import { RootState } from "../store/";
import logo from "../assets/images/logo.png";
import Logout from "./Logout";

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
      className="sticky top-0 flex flex-col w-full  z-40"
    >
      <section className="flex bg-green-50 py-1">
        <button
          onClick={toggleNav}
          className="lg:hidden xl:hidden flex-initial w-10  grid place-items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button className="mx-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        {user ? (
          <ul className="flex-1 flex justify-end pe-3">
            {/* My acount*/}
            <li className="px-2">
              <NavLink to="/my-account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </NavLink>
            </li>
            {/* <whishlist*/}
            <li className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </li>
            {/* Cast */}
            <li className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </li>
            <li className="px-2">
              <Logout />
            </li>
          </ul>
        ) : (
          <ul className="flex-1 flex justify-end pe-3">
            <li className="px-2">
              <NavLink to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
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
          <ul className="transition-all duration-300 lg:min-w-full lg:flex-1 flex justify-center text-center flex-col lg:flex-row gap-y-5 min-h-[110vh] lg:min-h-0 lg:h-14 lg:bg-green-50 w-full md:w-1/2  bg-green-50 lg:bg-transparent relative ">
            <button
              onClick={toggleNav}
              className="lg:hidden xl:hidden absolute right-5 top-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
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
