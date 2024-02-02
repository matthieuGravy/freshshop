import { Router, Request, Response } from "express";
import { ProductService } from "../db/models/products";
const router = Router();

const productService = new ProductService();

router.post("/products", async (req: Request, res: Response) => {
  try {
    await productService.addProducts(req.body);
    res
      .status(201)
      .send({ message: "Produits ajoutés avec succès à la base de données." });
  } catch (error) {
    res.status(500).send({
      error: "Erreur lors de l'ajout des produits à la base de données.",
    });
  }
});

export default router;
