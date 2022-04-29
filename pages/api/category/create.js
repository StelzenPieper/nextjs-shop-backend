import { dbConnect } from "../../../src/lib/database";
import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    await dbConnect();

    const newCategory = await Category.create({
      name: data.name,
      description: data.description,
    });

    res.status(200).json({
      message: "product has been created successfully",
      category: newCategory,
    });
  } else {
    res.status(400).json({ error: "wrong method - requires POST-method" });
  }
}
