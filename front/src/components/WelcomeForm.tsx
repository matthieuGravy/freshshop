import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/";

interface WelcomeFormProps {
  link: string;
  textlink: string;
  children: React.ReactNode;
  childrenarticle: React.ReactNode;
}

const WelcomeForm: React.FC<WelcomeFormProps> = ({
  children,
  childrenarticle,
}) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <section className="bg-green-50 w-full px-8 pb-8">
      {user ? (
        <article>
          <p>Bonjour, {user.email}!</p>
          {childrenarticle}
        </article>
      ) : (
        children
      )}
    </section>
  );
};

export default WelcomeForm;
