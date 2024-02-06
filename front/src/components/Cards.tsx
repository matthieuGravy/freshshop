interface ProductCardProps {
  title?: ReactNode;
  title?: String;
  price?: Number;
  button1?: ReactNode;
  button2?: ReactNode;
  image?: String;
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
      <figure className="w-52 xl:w-64 flex text-center bg-stone-50 relative rounded-xl overflow-hidden ">
        <article className="flex flex-col ">
          <img src={image} alt={title} className="px-12 pt-14 pb-8" />
          <figcaption className=" relative h-24 bg-stone-100 text-stone-500 py-6 text-left grid grid-cols-2 grid-rows-2 gap-y-4">
            {title}
            <p className="col-start-1 col-row-2">{price}€</p>
            <section className="col-start-2 row-start-1 text-right">
              {button1}
            </section>
            <section className="col-start-2 row-start-2 text-right ">
              {button2}
            </section>
          </figcaption>
        </article>
      </figure>
    </>
  );
};

export { ProductCard };
