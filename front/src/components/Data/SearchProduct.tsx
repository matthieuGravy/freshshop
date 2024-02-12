import React, { useState } from "react";

import SearchIcon from "../Icons/SearchIcon";
import CroixIcon from "../Icons/CroixIcon";
import { SearchCards } from "../Cards";
import DropUpIcon from "../Icons/DropupIcon";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const searchProducts = async () => {
    setProducts([]);

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

  return (
    <>
      {isOpen ? (
        <>
          <input
            className="relative z-10"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={async () => {
              await searchProducts();
              handleVisibility();
            }}
          >
            <SearchIcon />
          </button>
        </>
      ) : (
        ""
      )}
      {isOpen ? (
        ""
      ) : (
        <>
          <button onClick={handleOpen}>
            <SearchIcon />
          </button>
        </>
      )}
      <section>
        {visibility ? (
          <>
            {error && <p className="w-56 pt-5">{error}</p>}
            {products.length > 0 ? (
              <>
                {products.map((product) => (
                  <ul key={product._id} className="w-56 bg-stone-50 ">
                    <li className="">
                      <SearchCards
                        image={product.image}
                        title={product.name}
                        price={product.price}
                      />
                    </li>
                  </ul>
                ))}
                <button onClick={handleVisibility}>
                  <DropUpIcon />
                </button>
              </>
            ) : null}
          </>
        ) : null}
      </section>
    </>
  );
}

export default SearchProduct;
