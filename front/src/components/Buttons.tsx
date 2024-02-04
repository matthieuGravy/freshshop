import { NavLink } from "react-router-dom";

const ButtonSubmit = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-stone-500 border-2 border-stone-500 rounded-full p-3 w-28 text-white hover:bg-stone-600 hover:border-stone-600 transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

interface ButtonMxProps {
  children?: ReactNode;
}
const ButtonMx = ({ children }) => {
  return <button className="mx-2">{children}</button>;
};

interface NavlinkerButtonProps {
  to: string;
  text: string;
}
const NavlinkerButton = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className="bg-stone-50 px-4 border-2 border-stone-500 rounded-full hover:border-orange-400 transition duration-300 ease-in-out"
    >
      {text}
    </NavLink>
  );
};

interface ButtonBuyProps {
  text: ReactNode;
}
const ButtonBuy = ({ text }) => {
  return <button>{text}</button>;
};

interface ButtonAcionProps {
  text: string;
  function: () => void;
}
const ButtonAction = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="bg-stone-500 border-2 border-stone-500 rounded-full p-3 w-28 text-white hover:bg-stone-600 hover:border-stone-600 transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export { ButtonSubmit, ButtonMx, NavlinkerButton, ButtonBuy, ButtonAction };
