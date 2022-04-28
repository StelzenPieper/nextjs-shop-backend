import { getProducts } from "../../../src/services/get-products";

export default function handler(req, res) {
  const { id } = req.query;

  const cards = getProducts();

  const singleCard = cards.find((card) => card.id === id);

  if (req.method === "DELETE") {
    res.status(200).json({
      message: "product has been deleted successfully",
      card: singleCard,
    });
  } else if (req.method === "PUT") {
    const changeCard = JSON.parse(req.body);
    res
      .status(200)
      .json({
        message: "product has been edited successfully",
        card: changeCard,
      });
  } else {
    res.status(200).json(singleCard);
  }
}
