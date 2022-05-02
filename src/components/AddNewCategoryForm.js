import { useState } from "react";
import { useSWRConfig } from "swr";
import { AddCategoryForm } from "./AddNewCategoryForm.styled";

export default function AddNewProductForm() {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const { mutate } = useSWRConfig();

  const submit = async (event) => {
    event.preventDefault();
    setNameValue("");
    setDescriptionValue("");
    document.getElementById("inputName").select();

    const response = await fetch("/api/category/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
    console.log(await response.json());

    mutate("/api/categories");
  };

  return (
    <AddCategoryForm onSubmit={submit}>
      <h1>Add new Category</h1>
      <div>
        <label>Name</label>
        <input
          id="inputName"
          type="text"
          name="name"
          label="Name"
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
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
      <button
        type="submit"
        onClick={() => {
          console.log("Save category");
        }}
      >
        Add Category
      </button>
    </AddCategoryForm>
  );
}
