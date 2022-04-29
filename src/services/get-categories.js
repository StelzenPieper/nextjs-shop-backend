import { dbConnect } from "../lib/database";
import Category from "../models/Category";

export const getCategories = async () => {
  await dbConnect();

  const data = await Category.find();

  return data.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
};
