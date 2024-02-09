import { ProductCard } from "../../components/Cards";
import { ButtonBuy } from "../../components/Buttons";
import Heading from "../../components/JSXML/Heading";
import React, { useState } from "react";

import CaddieIcon from "../../components/Icons/CaddieIcon";
import WishIcon from "../../components/Icons/WishIcon";
import FilterIcon from "../../components/Icons/FilterIcon";
import SearchIcon from "../../components/Icons/SearchIcon";

import FilterMenu from "../../components/Navigation/FilterMenu";
import Filter from "../../components/Navigation/Filter";
import FetchProducts from "../../components/Data/FetchProducts";
import FetchProductByCategory from "../../components/Data/FetchProductByCategory";
const Shoppage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const title =
    "Embark on a Fresh Journey: Cultivate Well-being with Our Premium Selection of Fruits and Vegetables!";
  const styleTitle = "text-7xl py-10 xl:ps-48 px-10";
  const titleCard = "kiwi";

  return (
    <>
      <section className="">
        <Heading level="h1" titre={title} />
        <article></article>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-4 grid-rows-auto sm:bg-stone-50 pt-12">
        <header className="sm:col-span-4 grid sm:grid-cols-4 place-items-end ">
          <section className="sm:col-span-3">
            <button className="px-4">
              <FilterIcon />
            </button>
            <button className="pe-8">
              <SearchIcon />
            </button>
          </section>
        </header>
        <section className="col-span-3  py-6 sm:px-6 ">
          <section className="grid auto-rows-max grid-cols-2 sm:grid-cols-2 xl:grid-cols-4  place-items-center gap-y-16 gap-x-6 bg-stone-100 py-12 px-8 rounded-lg">
            {/*
            <FetchProducts />
            */}
            {selectedCategory === "" && <FetchProducts />}
            {selectedCategory === "fruits" && (
              <FetchProductByCategory category="fruits" />
            )}
            {selectedCategory === "légumes" && (
              <FetchProductByCategory category="légumes" />
            )}
          </section>
        </section>
        <section className="row-start-2 sm:row-auto py-6 px-6">
          <nav className=" bg-stone-100 py-12 rounded-lg sm:sticky xl:top-24 top-6 sm:right-0">
            <ul>
              <li>stock only</li>
              <li>
                <FilterMenu
                  buttonTitle="Category"
                  styleButton="flex items-center justify-between w-full px-4 pb-2 text-left "
                  children={
                    <>
                      {
                        <>
                          <section className="flex flex-col items-start px-4 pb-2">
                            <button onClick={() => handleCategoryChange("")}>
                              None
                            </button>
                            <button
                              onClick={() => handleCategoryChange("fruits")}
                            >
                              Fruits
                            </button>
                            <button
                              onClick={() => handleCategoryChange("légumes")}
                            >
                              Légumes
                            </button>
                          </section>
                        </>
                      }
                    </>
                  }
                />
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
};

export default Shoppage;
