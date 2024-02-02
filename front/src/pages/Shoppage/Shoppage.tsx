import { ProductCard } from "../../components/Cards";
import { ButtonBuy } from "../../components/Buttons";
import Heading from "../../components/JSXML/Heading";

import CaddieIcon from "../../components/Icons/CaddieIcon";
import WishIcon from "../../components/Icons/WishIcon";
import FilterIcon from "../../components/Icons/FilterIcon";
import SearchIcon from "../../components/Icons/SearchIcon";

const Shoppage = () => {
  const title =
    "Embark on a Fresh Journey: Cultivate Well-being with Our Premium Selection of Fruits and Vegetables!";
  const styleTitle = "text-7xl py-10 xl:ps-48 px-10";
  const titleCard = "kiwi";
  const styleH3 = "text-orange-500 font-medium text-xl";

  return (
    <>
      <section className="">
        <Heading level="h1" titre={title} />
        <article></article>
      </section>
      <section className="grid grid-cols-4 bg-stone-50 pt-12">
        <header className="col-span-4 grid grid-cols-4 place-items-end">
          <section className=" col-span-3">
            <button className="px-4">
              <FilterIcon />
            </button>
            <button className="pe-8">
              <SearchIcon />
            </button>
          </section>
        </header>
        <section className="col-span-3  py-6 px-6 ">
          <section className="grid auto-rows-max grid-cols-4 place-items-center gap-y-16 bg-stone-100 py-12 rounded-lg">
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
            <ProductCard
              title={
                <Heading level="h3" titre={titleCard} className={styleH3} />
              }
              price={10}
              button1={<ButtonBuy text={<CaddieIcon />} />}
              button2={<ButtonBuy text={<WishIcon />} />}
            />
          </section>
        </section>
        <section className="py-6 px-6">
          <nav className="bg-stone-100 py-12 rounded-lg">
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
