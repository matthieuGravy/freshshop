import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>Productpage</h1>
      <h2>{product.name}</h2>
      {/* Affichez d'autres informations sur le produit comme vous le souhaitez */}
    </div>
  );
};

export default Productpage;
