import React, { ReactNode } from "react";

interface HeroHomeProps {
  children?: ReactNode;
  titre?: ReactNode;
}
interface HeroCatProps {
  children?: ReactNode;
  linkone?: ReactNode;
  linktwo?: ReactNode;
}

const HeroHome: React.FC<HeroHomeProps> = ({ titre, children }) => {
  return (
    <>
      {titre}
      {children}
    </>
  );
};

{
  /* Hero Home */
}
const HeroCat: React.FC<HeroCatProps> = ({ children, linkone, linktwo }) => {
  return (
    <>
      <section className="h-[30rem] bg-form-pattern bg-center bg-cover rounded-2xl shadow-br relative">
        <ul className="absolute z-10 left-0 top-0 px-6  bg-stone-50 rounded-br-2xl">
          <li className=" text-center pb-2">{linkone}</li>
          <li className="  text-center pb-2 ">{linktwo}</li>
        </ul>
        <section className="absolute z-10 center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </section>
        <article className=" h-full w-full bg-gradient-to-b from-stone-100 opacity-55 to-stone-400 rounded-2xl flex flex-col justify-center items-center"></article>
      </section>
    </>
  );
};

export { HeroHome, HeroCat };
