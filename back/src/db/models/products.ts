import mongoose, { Schema, Document, Model, Types } from "mongoose";

interface IProductDocument extends IProductAttributes, Document {
  _id: Types.ObjectId;
  __v: number;
}

interface IProductAttributes {
  name: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  available: boolean;
}

interface IProductModel extends Model<IProductDocument> {
  getProduct(name: string): Promise<IProductDocument>;
}

const productSchema = new Schema<IProductDocument>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      unique: false,
    },
    stock: {
      type: Number,
      required: true,
      unique: false,
    },
    image: {
      type: String,
      required: true,
      unique: false,
    },
    category: {
      type: String,
      required: true,
      unique: false,
    },
    available: {
      type: Boolean,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

productSchema.statics.getProduct = async function (name: string) {
  return this.findOne({ name: name }).exec();
};

productSchema.statics.addProducts = async function (
  products: IProductDocument[]
) {
  try {
    await this.insertMany(products);
    console.log("Produits ajoutés avec succès à la base de données.");
  } catch (error) {
    console.error(
      "Erreur lors de l'ajout des produits à la base de données :",
      error
    );
  }
};

const Product = mongoose.model<IProductDocument, IProductModel>(
  "Product",
  productSchema
);

// Liste des produits
const productList: IProductDocument[] = [
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Abricot",
    price: 2.99,
    stock: 50,
    image: "../assets/products/abricot.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Ananas",
    price: 3.99,
    stock: 40,
    image: "../assets/products/ananas.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Asperge",
    price: 1.49,
    stock: 30,
    image: "../assets/products/asperge.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Banana",
    price: 1.99,
    stock: 60,
    image: "../assets/products/Banana.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Broccoli",
    price: 2.49,
    stock: 25,
    image: "../assets/products/broccoli.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Carotte",
    price: 1.29,
    stock: 40,
    image: "../assets/products/carotte.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Celeri",
    price: 1.99,
    stock: 30,
    image: "../assets/products/celeri.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Cerise",
    price: 4.99,
    stock: 35,
    image: "../assets/products/cerise.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Champignon",
    price: 3.49,
    stock: 20,
    image: "../assets/products/champignon.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Choux Rouge",
    price: 2.79,
    stock: 18,
    image: "../assets/products/choux-rouge.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Fraise",
    price: 5.99,
    stock: 30,
    image: "../assets/products/fraise.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Framboise",
    price: 6.99,
    stock: 25,
    image: "../assets/products/framboise.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Haricot",
    price: 2.49,
    stock: 22,
    image: "../assets/products/haricot.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Kiwi",
    price: 3.79,
    stock: 28,
    image: "../assets/products/kiwi.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Myrtille",
    price: 7.99,
    stock: 20,
    image: "../assets/products/myrtille.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Oignon",
    price: 1.59,
    stock: 40,
    image: "../assets/products/oignon.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Pomme de Terre",
    price: 1.29,
    stock: 50,
    image: "../assets/products/p-d-t.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Poire",
    price: 3.49,
    stock: 30,
    image: "../assets/products/poire.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Poivron",
    price: 2.99,
    stock: 25,
    image: "../assets/products/poivron.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Pomme",
    price: 2.49,
    stock: 35,
    image: "../assets/products/pomme.svg",
    category: "fruits",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Salade",
    price: 2.99,
    stock: 30,
    image: "../assets/products/salade.svg",
    category: "légumes",
    available: true,
  }),
  new Product({
    _id: new Types.ObjectId(),
    __v: 0,
    name: "Tomate",
    price: 1.79,
    stock: 40,
    image: "../assets/products/tomate.svg",
    category: "légumes",
    available: true,
  }),
];

class ProductService {
  async addProduct(
    product: IProductDocument
  ): Promise<IProductDocument | null> {
    try {
      const existingProduct = await Product.findOne({ name: product.name });
      if (existingProduct) {
        console.log("Le produit existe déjà dans la base de données.");
        return null;
      }
      const newProduct = await new Product(product).save();
      console.log("Produit ajouté avec succès à la base de données.");
      return newProduct;
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit à la base de données :",
        error
      );
      return null;
    }
  }
  async addProducts(
    products: IProductDocument[]
  ): Promise<(IProductDocument | null)[]> {
    const addedProducts: (IProductDocument | null)[] = [];

    for (const product of products) {
      const addedProduct = await this.addProduct(product);
      addedProducts.push(addedProduct);
    }

    return addedProducts;
  }
  async getProducts(): Promise<IProductDocument[]> {
    try {
      const products = await Product.find();
      console.log("Produits récupérés avec succès de la base de données.");
      return products;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des produits de la base de données :",
        error
      );
      return []; // Retourne un tableau vide en cas d'erreur
    }
  }
  async getProductsByName(name: string): Promise<IProductDocument[] | null> {
    try {
      const products = await Product.find({ name: new RegExp(name, "i") });
      if (!products || products.length === 0) {
        console.log(
          "Aucun produit correspondant trouvé dans la base de données."
        );
        return null;
      }
      console.log("Produits récupérés avec succès de la base de données.");
      return products;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des produits de la base de données :",
        error
      );
      return null;
    }
  }

  async sortProductsByCategory(category: string): Promise<IProductDocument[]> {
    try {
      const products = await Product.find({ category: category })
        .sort({ category: 1 })
        .exec();
      console.log("Produits triés avec succès par catégorie.");
      return products;
    } catch (error) {
      console.error("Erreur lors du tri des produits par catégorie :", error);
      return [];
    }
  }
  async sortProductsByPrice(): Promise<IProductDocument[]> {
    try {
      const products = await Product.find().sort({ price: 1 }).exec();
      console.log("Produits triés avec succès par prix.");
      return products;
    } catch (error) {
      console.error("Erreur lors du tri des produits par prix :", error);
      return [];
    }
  }
  async sortProductsByStock(): Promise<IProductDocument[]> {
    try {
      const products = await Product.find().sort({ stock: 1 }).exec();
      console.log("Produits triés avec succès par stock.");
      return products;
    } catch (error) {
      console.error("Erreur lors du tri des produits par stock :", error);
      return [];
    }
  }
  async addtoCart(product: IProductDocument): Promise<IProductDocument | null> {
    try {
      const existingProduct = await Product.findById(product._id);
      if (existingProduct) {
        console.log("Le produit existe déjà dans la base de données.");
        return existingProduct;
      }

      const newProduct = await new Product(product).save();
      console.log("Produit ajouté avec succès à la base de données.");
      return newProduct;
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit à la base de données :",
        error
      );
      return null;
    }
  }
  async removeToCart(
    product: IProductDocument
  ): Promise<IProductDocument | null> {
    try {
      const existingProduct = await Product.findById(product._id);
      if (existingProduct) {
        console.log("Le produit existe déjà dans la base de données.");
        return existingProduct;
      }

      const newProduct = await new Product(product).save();
      console.log("Produit ajouté avec succès à la base de données.");
      return newProduct;
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit à la base de données :",
        error
      );
      return null;
    }
  }
  async wishliste(product: IProductDocument): Promise<IProductDocument | null> {
    try {
      const existingProduct = await Product.findById(product._id);
      if (existingProduct) {
        console.log("Le produit existe déjà dans la base de données.");
        return existingProduct;
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit à la base de données :",
        error
      );
      return null;
    }
  }
  async removeWishList(
    product: IProductDocument
  ): Promise<IProductDocument | null> {
    try {
      const existingProduct = await Product.findById(product._id);
      if (existingProduct) {
        console.log("Le produit existe déjà dans la base de données.");
        return existingProduct;
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit à la base de données :",
        error
      );
      return null;
    }
  }
  async getProductById(id: string): Promise<IProductDocument | null> {
    try {
      const product = await Product.findById(id).exec();
      console.log("product: ", product);
      if (!product) {
        console.log(
          "Aucun produit correspondant trouvé dans la base de données."
        );
        return null;
      }
      console.log("Produit récupéré avec succès de la base de données.");
      return product;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du produit de la base de données :",
        error
      );
      return null;
    }
  }
}

const productService = new ProductService();
productService.addProducts(productList);

export default Product;
export { IProductDocument, IProductAttributes, IProductModel, ProductService };
