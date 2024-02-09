import React, { useEffect, useState } from "react";
import { ProductCard } from "../cards";
import Heading from "../JSXML/Heading";
import CaddieIcon from "../Icons/CaddieIcon";
import WishIcon from "../Icons/WishIcon";
import { ButtonBuy } from "../../components/Buttons";

interface fetchProductByCategoryProps {
  category: string;
  render: (products: any) => React.ReactNode;
}

const fetchProductByCategory: React.FC<fetchProductByCategoryProps> = ({
  category,
}) => {
  const [products, setProducts] = useState<any>(null);
  const [IsLoading, setIsLoading] = useState(true);

  const fetchProductByCategory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4700/products/cat/${category}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const newProducts = await response.json();
        if (JSON.stringify(newProducts) !== JSON.stringify(products)) {
          setProducts(newProducts);
        }
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    } finally {
      setIsLoading(false); // Appeler setIsLoading(false) dans un bloc finally pour s'assurer qu'il est toujours appelé
    }
  };

  useEffect(() => {
    fetchProductByCategory();
  }, [category]);
  const styleH3 = "text-orange-500 ";
  return (
    <>
      {IsLoading ? (
        <div>Loading...</div>
      ) : (
        products &&
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
        ))
      )}
    </>
  );
};

export default fetchProductByCategory;
