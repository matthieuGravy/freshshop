import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import CaddieIcon from "../../../components/Icons/CaddieIcon";
import WishIcon from "../../../components/Icons/WishIcon";
import FilterIcon from "../../../components/Icons/FilterIcon";
import SearchIcon from "../../../components/Icons/SearchIcon";

import { ProductCard } from "../../../components/Cards";
import { ButtonBuy } from "../../../components/Buttons";
import Heading from "../../../components/JSXML/Heading";
import FilterMenu from "../../../components/Navigation/FilterMenu";
import Filter from "../../../components/Navigation/Filter";
import FetchProducts from "../../../components/Data/FetchProducts";
import FetchProductByCategory from "../../../components/Data/FetchProductByCategory";
import SearchProduct from "../../../components/Data/SearchProduct";

const Productspage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const topNavRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(!entry.isIntersecting || scrollY.get() > 100);
      },
      { threshold: 1 }
    );

    if (topNavRef.current) {
      observer.observe(topNavRef.current);
    }

    return () => {
      if (topNavRef.current) {
        observer.unobserve(topNavRef.current);
      }
    };
  }, [scrollY]);

  const handleCategoryChange = (category) => {
    console.log("handleCategoryChange called with:", category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    console.log("selectedCategory changed to:", selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <section className="grid auto-rows-max grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  place-items-center gap-y-16 gap-x-6 bg-stone-100 py-12 px-8 rounded-lg">
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
      <motion.section
        className="xl:row-auto fixed top-4 w-full flex flex-row"
        variants={{ isVisible: { y: 40 }, isHidden: { y: -20 } }}
        initial={{ y: -20 }}
        animate={isHidden ? "isHidden" : "isVisible"}
        transition={{ duration: 0.3 }}
      >
        <nav className="bg-orange-500 xl:sticky xl:top-24 top-6 sm:right-0 w-full">
          <ul className="flex py-2 justify-center">
            <li>
              <button className="px-4">Stock only</button>
            </li>
            <li>
              <SearchProduct />
            </li>
            <li>
              <FilterMenu
                buttonTitle="Category"
                styleButton="flex items-center justify-between w-64 px-4 pb-2 text-left "
                children={
                  <>
                    {
                      <>
                        <section className="flex flex-col items-start px-4 pb-2">
                          <button
                            className={
                              selectedCategory === "" ? "font-bold" : ""
                            }
                            onClick={() => handleCategoryChange("")}
                          >
                            All
                          </button>
                          <button
                            className={
                              selectedCategory === "fruits" ? "font-bold" : ""
                            }
                            onClick={() => handleCategoryChange("fruits")}
                          >
                            Fruits
                          </button>
                          <button
                            className={
                              selectedCategory === "légumes" ? "font-bold" : ""
                            }
                            onClick={() => handleCategoryChange("légumes")}
                          >
                            Vegetables
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
      </motion.section>
    </>
  );
};

export default Productspage;
