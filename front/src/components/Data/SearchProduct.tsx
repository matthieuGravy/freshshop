import React, { useState } from "react";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:4700/products/${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche des produits");
      }
      const productsData = await response.json();
      setProducts(productsData);
      console.log(productsData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchProducts}>Rechercher</button>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </>
  );
}

export default SearchProduct;
