import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "../../../components/JSXML/Heading";
import {
  ButtonAction,
  ButtonSubmit,
  ButtonBuy,
} from "../../../components/Buttons";
import WishIcon from "../../../components/Icons/WishIcon";

const Productpage = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  console.log("id:", _id);

  useEffect(() => {
    fetch(`http://localhost:4700/products/id/${_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Erreur:", error);
        setError(error);
      });
  }, [_id]);

  if (error) {
    return <div>Une erreur est survenue: {error.message}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <form className="grid grid-cols-2 bg-red-200 ">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <article className="bg-orange-200">
        <Heading
          className="text-3xl font-light text-center"
          titre={product.name}
          level="h2"
        ></Heading>
        <p>{product.price}</p>
        <section className="bg-green-200">
          <Heading level="h3" titre="Category" className="text-xl font-light" />
          <nav>
            <ButtonAction text="cat- 1" />
            <ButtonAction text="cat- 2" />
            <ButtonAction text="cat- 3" />
          </nav>
        </section>
        <section className="border-t-4 py-4 bg-blue-200">
          <Heading level="h3" titre="Quantity" className="text-xl font-light" />
          <label className="pb-8 bg-pink -200" htmlFor="">
            <button>-</button>
            <input type="number" />
            <button>+</button>
          </label>
        </section>
        <ButtonSubmit
          text="Add to cart"
          func={() => console.log("Add to cart")}
        />
        <ButtonBuy text={<WishIcon />} func={() => console.log("Buy now")} />
      </article>
    </form>
  );
};

export default Productpage;
