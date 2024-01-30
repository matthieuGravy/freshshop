import { ProductCard } from "../../components/Cards";

const Shoppage = () => {
  const title =
    "Embark on a Fresh Journey: Cultivate Well-being with Our Premium Selection of Fruits and Vegetables!";
  const styleTitle = "text-7xl py-10 xl:ps-48 px-10";
  return (
    <>
      <section>
        <h1>Shoppage</h1>
        <article>hero</article>
        <section>
          <header>
            <button>filter</button>
            <button>search</button>
          </header>
          <section>
            <ProductCard />
          </section>
        </section>
        <section>
          <nav>
            <ul>
              <li>category</li>
              <li>stock only</li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
};

export default Shoppage;
