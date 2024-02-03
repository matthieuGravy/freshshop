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
      <figure className=" w-44 flex text-center bg-stone-50 relative rounded-xl overflow-hidden">
        <article className="flex flex-col ">
          {/*<img src={src} alt={title} />*/}
          <img src={image} alt={title} className="px-12 pt-14 pb-8" />
          <figcaption className=" relative h-24 bg-stone-500 text-stone-50 py-6">
            {title}
            <p>{price}€</p>
            <section className="px-4 absolute top-5 right-0 flex flex-col gap-y-2">
              {button1} {button2}
            </section>
          </figcaption>
        </article>
      </figure>
    </>
  );
};

export { ProductCard };
