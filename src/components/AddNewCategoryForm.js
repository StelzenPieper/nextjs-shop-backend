import { useRouter } from "next/router";
import { useState } from "react";
import { AddCategoryForm } from "./AddNewCategoryForm.styled";

export default function AddNewProductForm() {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/category/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
    console.log(await response.json());

    router.push("/categories");
  };

  return (
    <AddCategoryForm onSubmit={submit}>
      <h1>Add new Category</h1>
      <div>
        <label>Name</label>
        <input
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
