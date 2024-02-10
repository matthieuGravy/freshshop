import React, { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

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
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchProducts}>
            {" "}
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
        {error && <p>{error}</p>}
        {products.length > 0
          ? products.map((product) => (
              <ul key={product._id}>
                <li>{product.name}</li>
              </ul>
            ))
          : ""}
      </section>
    </>
  );
}

export default SearchProduct;
