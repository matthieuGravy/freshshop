import React, { ReactNode } from "react";

interface HeroHomeProps {
  children?: ReactNode;
}
interface HeroCatProps {
  children?: ReactNode;
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

const HeroCat: React.FC<HeroCatProps> = ({ children }) => {
  return (
    <>
      <section className="h-[30rem] bg-form-pattern bg-center bg-cover rounded-2xl shadow-lg flex flex-col justify-center items-center">
        {children}
      </section>
    </>
  );
};

export { HeroHome, HeroCat };
