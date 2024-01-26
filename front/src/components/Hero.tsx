import React, { ReactNode } from "react";

interface HeroHomeProps {
  children?: ReactNode;
}
interface HeroCatProps {
  children?: ReactNode;
  linkone?: ReactNode;
  linktwo?: ReactNode;
}

const HeroHome: React.FC<HeroHomeProps> = ({ children }) => {
  return (
    <>
      <h1 className="text-7xl p-10">
        Embark on a Fresh Journey: Cultivate Well-being with Our Premium
        Selection of Fruits and Vegetables!
      </h1>
      {children}
    </>
  );
};

const HeroCat: React.FC<HeroCatProps> = ({ children, linkone, linktwo }) => {
  return (
    <>
      <section className="h-[30rem] bg-form-pattern bg-center bg-cover rounded-2xl shadow-lg">
        <article className="relative h-full w-full bg-gradient-to-b from-green-50 opacity-85 to-stone-300 rounded-2xl flex flex-col justify-center items-center">
          <div className="absolute left-0 top-0 flex flex-col">
            {linkone} {linktwo}
          </div>
          {children}
        </article>
      </section>
    </>
  );
};

export { HeroHome, HeroCat };
