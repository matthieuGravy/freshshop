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
  return (
    <>
      <figure className="flex text-center bg-stone-50 relative rounded-xl overflow-hidden ">
        <article className="flex flex-col flex-1 ">
          {image}

          <figcaption className=" flex-auto relative h-24 bg-stone-100 text-stone-500 py-6 text-left grid grid-cols-3 grid-auto">
            <article className="col-span-2">{title}</article>
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
