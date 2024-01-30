interface HeadingProps {
  titre?: string;
  className?: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({ titre, className, level }) => {
  switch (level) {
    case "h1":
      return <h1 className={className}>{titre}</h1>;
    case "h2":
      return <h2 className={className}>{titre}</h2>;
    case "h3":
      return <h3 className={className}>{titre}</h3>;
    case "h4":
      return <h4 className={className}>{titre}</h4>;
    case "h5":
      return <h5 className={className}>{titre}</h5>;
    case "h6":
      return <h6 className={className}>{titre}</h6>;
    default:
      return null;
  }
};

export default Heading;
