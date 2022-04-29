import { dbConnect } from "../../../src/lib/database";
import Product from "../../../src/models/Product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    await dbConnect();

    const newProduct = await Product.create({
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      tags: data.tags,
    });

    res.status(200).json({
      message: "product has been created successfully",
      product: newProduct,
    });
  } else {
    res.status(400).json({ error: "wrong method - requires POST-method" });
  }
}
