import React, { useEffect, useState } from "react";
import { ProductCard } from "../cards";
import Heading from "../JSXML/Heading";
import CaddieIcon from "../Icons/CaddieIcon";
import WishIcon from "../Icons/WishIcon";
import { ButtonBuy } from "../../components/Buttons";

interface FetchProductsProps {
  render: (products: any) => React.ReactNode;
}

const FetchProducts: React.FC<FetchProductsProps> = () => {
  const [products, setProducts] = useState<any>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4700/products", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const products = await response.json();
        setProducts(products);
        console.log("products", products);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
    const intervalId = setInterval(fetchProducts, 5000); // Polling toutes les 5 secondes

    return () => clearInterval(intervalId); // Nettoyer sur le démontage
  }, []);
  const styleH3 = "text-orange-500 font-medium text-xl w-22";
  return (
    <>
      {products &&
        products.map((product: any) => (
          <ProductCard
            key={product._id}
            title={
              <Heading level="h3" titre={product.name} className={styleH3} />
            }
            image={product.image}
            price={product.price}
            button1={<ButtonBuy text={<CaddieIcon />} />}
            button2={<ButtonBuy text={<WishIcon />} />}
          />
        ))}
    </>
  );
};

export default FetchProducts;
