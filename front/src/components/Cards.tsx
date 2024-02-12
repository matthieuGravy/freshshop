import { useState } from "react";

interface ProductCardProps {
  title?: ReactNode;
  title?: String;
  price?: Number;
  button1?: ReactNode;
  button2?: ReactNode;
  image: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  button1,
  button2,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <figure
        className="flex text-center relative rounded-xl overflow-hidden hover:bg-orange-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <article
          className={
            isHovered
              ? "flex flex-col flex-1 "
              : "bg-stone-50 flex flex-col flex-1 "
          }
        >
          {image}

          <figcaption
            className={
              isHovered
                ? "flex-auto relative h-24 text-stone-200 py-6 text-left grid grid-cols-3 grid-auto px-2"
                : "flex-auto relative h-24 text-stone-500 py-6 text-left grid grid-cols-3 grid-auto bg-stone-100"
            }
          >
            <article
              className={
                isHovered
                  ? "col-span-2 text-stone-50"
                  : "col-span-2 text-orange-500"
              }
            >
              {title}
            </article>
            <p className="col-start-1 cols-span-2 col-row-2">{price}€</p>
            <section className="col-start-3 row-start-1 text-right">
              {button1}
            </section>
            <section className="col-start-3 row-start-2 text-right">
              {button2}
            </section>
          </figcaption>
        </article>
      </figure>
    </>
  );
};

interface SearchCardsProps {
  title: ReactNode;
  price: Number;
  image: React.ReactNode;
  button1: ReactNode;
}
const SearchCards: React.FC<SearchCardsProps> = ({
  image,
  title,
  price,
  button1,
}) => {
  return (
    <>
      <figure className="overflow-hidden hover:bg-stone-100 ">
        <article className="flex flex-row flex-1 justify-between px-4">
          <img src={image} className="h-12" alt={title} />
          <figcaption className="text-right">
            <article className="">{title}</article>
            <p className="">{price}€</p>
            <section className="">{button1}</section>
          </figcaption>
        </article>
      </figure>
    </>
  );
};

export { ProductCard, SearchCards };
