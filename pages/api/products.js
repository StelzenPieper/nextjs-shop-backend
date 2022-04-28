import { getProducts } from "../../src/services/get-products";

export default function handler(req, res) {
  const products = getProducts();

  res.status(200).json(products);
}
