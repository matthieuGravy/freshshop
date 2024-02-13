import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

import Spinner from "../Icons/Spinner";
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
  const [redirect, setRedirect] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductByCategory();
  }, [category]);
  const styleH3 = "text-orange-500 ";

  const handleClick = (product: any) => {
    if (!product._id) {
      console.error("Product has no _id:", product);
      return;
    }
    navigate(`../product/${product._id}`, { state: { product } });
  };
  return (
    <>
      {IsLoading ? (
        <>
          <div>Loading...</div>
        </>
      ) : (
        products &&
        products.map((product: any) => (
          <ProductCard
            key={product._id}
            func={() => handleClick(product)}
            title={
              <Heading level="h3" titre={product.name} className={styleH3} />
            }
            image={
              <LazyLoadImage
                src={product.image}
                alt={product.name}
                title={product.title}
                placeholder={<Spinner />}
              />
            }
            price={product.price}
            button1={
              <ButtonBuy
                text={<CaddieIcon />}
                onClick={() => handleClick(product)}
              />
            }
            button2={
              <ButtonBuy
                text={<WishIcon />}
                onClick={() => handleClick(product)}
              />
            }
          />
        ))
      )}
    </>
  );
};

export default fetchProductByCategory;
