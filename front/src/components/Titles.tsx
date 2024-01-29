interface HeadingProps {
  titre?: string;
  className?: string;
}

const Hone: React.FC<HeadingProps> = ({ titre, className }) => {
  return <h1 className={className}>{titre}</h1>;
};
const Htwo: React.FC<HeadingProps> = ({ titre, className }) => {
  return <h2 className={className}>{titre}</h2>;
};
const Hthree: React.FC<HeadingProps> = ({ titre, className }) => {
  return <h3 className={className}>{titre}</h3>;
};
const Hfour: React.FC<HeadingProps> = ({ titre, className }) => {
  return <h4 className={className}>{titre}</h4>;
};
const Hfive: React.FC<HeadingProps> = ({ titre, className }) => {
  return <h5 className={className}>{titre}</h5>;
};
const Hsix: React.FC<HeadingProps> = ({ titre, className }) => {
  return <h6 className={className}>{titre}</h6>;
};

export { Hone, Htwo, Hthree, Hfour, Hfive, Hsix };
