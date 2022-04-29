import { dbConnect } from "../lib/database";
import Product from "../models/Product";

export const getProducts = async () => {
  await dbConnect();

  const data = await Product.find();
  return data.map(({ id, name, price, description, category }) => ({
    id,
    name,
    price,
    description,
    category,
  }));
};
