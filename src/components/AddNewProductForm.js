import { useState } from "react";
import { useSWRConfig } from "swr";
import { AddProductForm } from "./AddNewProductForm.styled";

export default function AddNewProductForm() {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [tagsValue, setTagsValue] = useState([]);
  const { mutate } = useSWRConfig();

  const submit = async (event) => {
    event.preventDefault();
    setNameValue("");
    setPriceValue("");
    setDescriptionValue("");
    setCategoryValue("");
    setTagsValue("");
    document.getElementById("inputName").select();

    const response = await fetch("/api/product/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        price: priceValue,
        description: descriptionValue,
        category: categoryValue,
        tags: tagsValue,
      }),
    });
    console.log(await response.json());

    mutate("/api/products");
  };

  return (
    <AddProductForm onSubmit={submit}>
      <h1>Add new Product</h1>
      <div>
        <label>Name</label>
        <input
          id="inputName"
          type="text"
          name="name"
          label="Name"
          value={nameValue}
          autoFocus={true}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
        />
      </div>
      <div>
        <lable>Preis</lable>
        <input
          type="number"
          name="price"
          label="Preis"
          value={priceValue}
          onChange={(event) => {
            setPriceValue(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          label="Description"
          value={descriptionValue}
          onChange={(event) => {
            setDescriptionValue(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          name="category"
          label="Category"
          value={categoryValue}
          onChange={(event) => {
            setCategoryValue(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          label="Tags"
          value={tagsValue}
          onChange={(event) => {
            setTagsValue(event.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          console.log("Save product");
        }}
      >
        Add Product
      </button>
    </AddProductForm>
  );
}
