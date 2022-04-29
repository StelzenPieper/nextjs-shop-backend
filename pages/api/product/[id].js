import Product from "../../../src/models/Product";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const deletedCard = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "product has been deleted successfully",
      card: deletedCard,
    });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const changedCard = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({
      message: "product has been edited successfully",
      card: changedCard,
    });
  } else {
    const singleProduct = await Product.findeById(id);
    res.status(200).json(singleProduct);
  }
}
