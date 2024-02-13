import React, { useEffect, useState } from "react";
import { ProductCard } from "../cards";
import Heading from "../JSXML/Heading";
import CaddieIcon from "../Icons/CaddieIcon";
import WishIcon from "../Icons/WishIcon";
import { ButtonBuy } from "../../components/Buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

interface FetchProductsProps {
  render: (products: any) => React.ReactNode;
}

const FetchProducts: React.FC<FetchProductsProps> = () => {
  const [products, setProducts] = useState<any>(null);
  const [IsLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4700/products", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    fetchProducts();
  }, []);
  const handleProduct = (product: any) => {
    if (!product._id) {
      console.error("Product has no _id:", product);
      return;
    }

    navigate(`../product/${product._id}`, { state: { product } });
  };

  const styleH3 = "";

  return (
    <>
      {IsLoading ? (
        <div>Loading...</div>
      ) : (
        products &&
        products.map((product: any) => (
          <ProductCard
            key={product._id}
            func={() => handleProduct(product)}
            title={
              <Heading level="h3" titre={product.name} className={styleH3} />
            }
            image={
              <LazyLoadImage
                src={product.image}
                alt={product.name}
                title={product.title}
              />
            }
            price={product.price}
            button1={
              <ButtonBuy
                text={<CaddieIcon />}
                onClick={() => handleProduct(product)}
              />
            }
            button2={
              <ButtonBuy
                text={<WishIcon />}
                onClick={() => handleProduct(product)}
              />
            }
          />
        ))
      )}
    </>
  );
};

export default FetchProducts;
