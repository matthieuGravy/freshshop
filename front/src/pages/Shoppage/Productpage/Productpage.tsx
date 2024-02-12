import { useLocation, useParams } from "react-router-dom";

const Productpage = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state.product;

  return (
    <div>
      <h1>Productpage</h1>
      <h2>{product.name}</h2>
      {/* Affichez d'autres informations sur le produit comme vous le souhaitez */}
    </div>
  );
};

export default Productpage;
