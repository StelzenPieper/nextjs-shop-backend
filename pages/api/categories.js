import { getCategories } from "../../src/services/get-categories";

export default function handler(req, res) {
  const categories = getCategories();

  res.status(200).json(categories);
}
