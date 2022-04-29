import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: "category has been deleted successfully",
      card: deletedCategory,
    });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const changedCategory = await Category.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({
      message: "category has been edited successfully",
      card: changedCategory,
    });
  } else {
    const singleCategory = await Category.findeById(id);
    res.status(200).json(singleCategory);
  }
}
