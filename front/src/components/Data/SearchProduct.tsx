import React, { useState } from "react";

import SearchIcon from "../Icons/SearchIcon";
import CroixIcon from "../Icons/CroixIcon";
import { SearchCards } from "../Cards";
import DropUpIcon from "../Icons/DropupIcon";
import { useNavigate } from "react-router-dom";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const handleVisibility = () => {
    setVisibility(!visibility);
  };
  const trueVisibility = () => {
    setVisibility(true);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const CheckHandleOpen = () => {
    setIsOpen(false);
    setVisibility(false);
  };

  const searchProducts = async (event) => {
    setProducts([]);
    setError(null);
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4700/products/${searchTerm}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Sorry, no products found");
        } else {
          throw new Error("Erreur lors de la recherche des produits");
        }
      }
      let productsData = await response.json();
      productsData = productsData.slice(0, 5);
      setProducts(productsData);
      console.log(productsData);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  const handleClick = (product: any) => {
    if (!product._id) {
      console.error("Product has no _id:", product);
      return;
    }
    navigate(`../product/${product._id}`, { state: { product } });
  };

  return (
    <>
      <section>
        {isOpen ? (
          <>
            <section className="flex flex-row align-center">
              <form onSubmit={searchProducts} className="flex-flex-row flex-1">
                <input
                  className="relative z-10 w-[90%] px-3 py-2 text-base text-gray-700 placeholder-gray-600 focus:shadow-outline"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="bg-red-400"
                  onClick={async () => {
                    await trueVisibility();
                  }}
                >
                  <SearchIcon />
                </button>
              </form>
              <button
                onClick={async () => {
                  await CheckHandleOpen();
                }}
              >
                <CroixIcon />
              </button>
            </section>
          </>
        ) : (
          <>
            <button onClick={handleOpen}>
              <SearchIcon />
            </button>
          </>
        )}

        {visibility ? (
          <>
            <section className="bg-red-200 absolute">
              {error && <p>{error}</p>}
              {products.length > 0 ? (
                <>
                  {products.map((product) => (
                    <ul
                      key={product._id}
                      onClick={() => handleClick(product)}
                      className="w-56 bg-stone-50 "
                    >
                      <li className="py-2 px-1">
                        <SearchCards
                          image={product.image}
                          title={product.name}
                          price={product.price}
                        />
                      </li>
                    </ul>
                  ))}
                </>
              ) : null}
            </section>
          </>
        ) : null}
      </section>
    </>
  );
}

export default SearchProduct;
