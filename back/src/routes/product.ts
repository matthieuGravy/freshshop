import { Router, Request, Response } from "express";
import { ProductService } from "../db/models/products";
const router = Router();

const productService = new ProductService();

router.post("/", async (req: Request, res: Response) => {
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

router.get("/", async (_req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send({
      error:
        "Erreur lors de la récupération des produits dans la base de données.",
    });
  }
});

router.get("/:name", async (req: Request, res: Response) => {
  try {
    const products = await productService.getProductsByName(req.params.name);
    if (!products || products.length === 0) {
      res.status(404).send({
        error: "Aucun produit correspondant trouvé dans la base de données.",
      });
      return;
    }
    res.json(products);
  } catch (error) {
    res.status(500).send({
      error:
        "Erreur lors de la récupération des produits dans la base de données.",
    });
  }
});

router.get("/cat/:category", async (req: Request, res: Response) => {
  try {
    const products = await productService.sortProductsByCategory(
      req.params.category
    );
    console.log("Produits regroupés avec succès de la base de données.");
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).send({
      error:
        "Erreur lors de la récupération des produits dans la base de données.",
    });
  }
});

router.get("/id/:id", async (req: Request, res: Response) => {
  try {
    const products = await productService.getProductsById(req.params.id);
    if (!products || products.length === 0) {
      res.status(404).send({
        error: "Aucun produit correspondant trouvé dans la base de données.",
      });
      return;
    }
    res.json(products);
  } catch (error) {
    res.status(500).send({
      error:
        "Erreur lors de la récupération des produits dans la base de données.",
    });
  }
});

router.get("/price/:price", async (req: Request, res: Response) => {
  try {
    const products = await productService.sortProductsByPrice(req.params.price);
    res.json(products);
  } catch (error) {
    res.status(500).send({
      error:
        "Erreur lors de la récupération des produits dans la base de données.",
    });
  }
});

router.get("/stock/:stock", async (req: Request, res: Response) => {
  try {
    const products = await productService.sortProductsByStock(req.params.stock);
    res.json(products);
  } catch (error) {
    res.status(500).send({
      error:
        "Erreur lors de la récupération des produits dans la base de données.",
    });
  }
});

export default router;
